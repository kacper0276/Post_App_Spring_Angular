package kacperrenkel.postapp.backend.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kacperrenkel.postapp.backend.auth.CookieService;
import kacperrenkel.postapp.backend.auth.JwtService;
import kacperrenkel.postapp.backend.entity.LoginResponse;
import kacperrenkel.postapp.backend.exceptions.ObjectNotExistInDBException;
import kacperrenkel.postapp.backend.util.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.servlet.http.Cookie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final CookieService cookieService;
    private final JwtService jwtService;
    private final UserMapper mapper = UserMapper.INSTANCE;

    @Value("${security.jwt.expiration-time}")
    private int expirationTime;

    @Value("${security.jwt.expiration-time.refresh}")
    private int expirationTimeRefresh;

    private void validateToken(HttpServletRequest request, HttpServletResponse response) throws IllegalArgumentException {
        String token = null;
        String refresh = null;
        if (request.getCookies() != null) {
            for (Cookie value : Arrays.stream(request.getCookies()).toList()) {
                if (value.getName().equals("Authorization")) {
                    token = value.getValue();
                } else if (value.getName().equals("refresh")) {
                    refresh = value.getValue();
                }
            }
        } else {
            throw new IllegalArgumentException("Token can't be null");
        }
        try {
            jwtService.validateToken(token);
        } catch (IllegalArgumentException e) {
            jwtService.validateToken(refresh);
        }
    }

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null) {
            user.setRole(Role.User);
        }

        return userRepository.save(user);
    }

    private String generateToken(User user, int exp) {
        return jwtService.generateToken(user, exp);
    }

    public ResponseEntity<?> loginUser(User user, HttpServletResponse response) {
        User loginUser = userRepository.findByUsernameAndActivatedIsTrue(user.getUsername()).orElse(null);

        if (loginUser != null && passwordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                Cookie refresh = cookieService.generateCookie("refresh", generateToken(user, expirationTimeRefresh), expirationTimeRefresh);
                Cookie cookie = cookieService.generateCookie("Authorization", generateToken(user, expirationTime), expirationTime);
                response.addCookie(cookie);
                response.addCookie(refresh);
                return ResponseEntity.ok(
                        UserDTO.builder()
                                .email(loginUser.getEmail())
                                .username(loginUser.getUsername())
                                .role(loginUser.getRole())
                                .image(loginUser.getImage())
                                .likes(loginUser.getLikes())
                                .build()
                );
            } else {
                return ResponseEntity.ok(new LoginResponse(false));
            }
        }

        return ResponseEntity.ok(new LoginResponse(false));
    }

    public ResponseEntity<?> loginByToken(HttpServletRequest request, HttpServletResponse response) {
        try {
            validateToken(request, response);
            String refresh = null;
            for (Cookie value : Arrays.stream(request.getCookies()).toList()) {
                if (value.getName().equals("refresh")) {
                    refresh = value.getValue();
                }
            }
            String username = jwtService.extractUsername(refresh);
            User user = userRepository.findByUsernameAndActivatedIsTrue(username).orElse(null);

            if (user != null) {
                return ResponseEntity.ok(
                        UserDTO.builder()
                                .username(user.getUsername())
                                .email(user.getEmail())
                                .role(user.getRole())
                                .likes(user.getLikes())
                                .build());
            }
            return ResponseEntity.ok(new LoginResponse(false));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.ok(new LoginResponse(false));
        }
    }

    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        Cookie cookie = cookieService.removeCookie(request.getCookies(), "Authorization");
        if (cookie != null) {
            response.addCookie(cookie);
        }
        cookie = cookieService.removeCookie(request.getCookies(), "refresh");
        if (cookie != null) {
            response.addCookie(cookie);
        }
        return ResponseEntity.ok(new LoginResponse(true));
    }

    public ResponseEntity<?> loggedIn(HttpServletRequest request, HttpServletResponse response) {
        try {
            validateToken(request, response);
            return ResponseEntity.ok(new LoginResponse(true));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.ok(new LoginResponse(false));
        }
    }

    public void activeUser(int id) throws ObjectNotExistInDBException {
        User user = userRepository.findByIdAndActivatedIsFalse(id).orElse(null);

        if (user != null) {
            user.setActivated(true);
            userRepository.save(user);
            return;
        }
        throw new ObjectNotExistInDBException("User don't exist");
    }

    public User getByUsername(String username) {
        return userRepository.findByUsernameAndActivatedIsTrue(username).orElse(null);
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }

    public List<UserDTO> getUsersIncludeName(String name) {
        List<UserDTO> users = new ArrayList<>();

        userRepository
                .findByUsernameContainingIgnoreCase(name)
                .forEach(user -> {
                    users.add(mapper.userToUserDTO(user));
                });

        return users;
    }
}
