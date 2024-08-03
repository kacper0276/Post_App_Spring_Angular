package kacperrenkel.postapp.backend.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kacperrenkel.postapp.backend.exceptions.ObjectNotExistInDBException;
import kacperrenkel.postapp.backend.util.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(path = "/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping(path = "/register")
    ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.registerUser(user));
    }

    @PostMapping(path = "/login")
    ResponseEntity<?> login(@RequestBody User user, HttpServletResponse response) {
        return userService.loginUser(user, response);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        return userService.refreshToken(request, response);
    }

    @PatchMapping(path = "/edit-user-data")
    public ResponseEntity<?> editUserData(@RequestParam(required = false) int id,
                                          @RequestParam(required = false) String email, @RequestParam(required = false) String username,
                                          @RequestParam(required = false) String password, @RequestParam(required = false) MultipartFile image) {
        try {
            if (username == null || username.isEmpty()) {
                return ResponseEntity.status(400).body(new Response("Username is required"));
            }

            User user = new User();
            user.setUsername(username);
            if (email != null && !email.isEmpty()) {
                user.setEmail(email);
            }
            if (password != null && !password.isEmpty()) {
                user.setPassword(password);
            }

            user.setId(id);

            User updatedUser = userService.updateUser(user, image);
            return ResponseEntity.ok(updatedUser);

        } catch (ObjectNotExistInDBException e) {
            return ResponseEntity.status(404).body(new Response("User not found"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new Response("Error updating user"));
        }
    }

    @GetMapping(path = "/auto-login")
    public ResponseEntity<?> autoLogin(HttpServletRequest request, HttpServletResponse response) {
        return userService.loginByToken(request, response);
    }

    @GetMapping(path = "/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        return userService.logout(request, response);
    }

    @GetMapping(path = "/logged-in")
    public ResponseEntity<?> loggedIn(HttpServletRequest request, HttpServletResponse response) {
        return userService.loggedIn(request, response);
    }

    @GetMapping(path = "/activate")
    public ResponseEntity<Response> activate(@RequestParam int id) {
        try {
            userService.activeUser(id);
            return ResponseEntity.ok(new Response("Aktywowano konto"));
        } catch (ObjectNotExistInDBException ex) {
            return ResponseEntity.status(400).body(new Response("Nie można aktywować konta użytkownika"));
        }
    }

    @GetMapping(path = "/search-users")
    public ResponseEntity<List<UserDTO>> findUsers(@RequestParam String username) {
        return ResponseEntity.ok(userService.getUsersIncludeName(username));
    }

    @GetMapping(path = "/get-user-by-username/{username}")
    public ResponseEntity<UserDTO> findUserByUsername(@PathVariable("username") String username) {
        return ResponseEntity.ok(userService.getByUsernameDto(username));
    }
}
