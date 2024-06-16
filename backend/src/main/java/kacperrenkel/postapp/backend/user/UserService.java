package kacperrenkel.postapp.backend.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kacperrenkel.postapp.backend.entity.LoginResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper mapper = UserMapper.INSTANCE;

    @Value("${security.jwt.expiration-time}")
    private int expirationTime;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null) {
            user.setRole(Role.User);
        }

        return userRepository.save(user);
    }

    public UserDTO loginUser(User user, HttpServletResponse response) {
        User loginUser = userRepository.findByUsername(user.getUsername()).orElse(null);

        if (loginUser != null && passwordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
            return mapper.userToUserDTO(loginUser);
        }

        return null;
    }

    public ResponseEntity<LoginResponse> loggedIn(HttpServletRequest request, HttpServletResponse response) {
        return  ResponseEntity.ok(new LoginResponse(true));
    }
}
