package kacperrenkel.postapp.backend.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    ResponseEntity<UserDTO> login(@RequestBody User user) {
        return ResponseEntity.ok(userService.loginUser(user));
    }

    @GetMapping(path = "/logged-in")
    public ResponseEntity<?> loggedIn(HttpServletRequest request, HttpServletResponse response) {
        return userService.loggedIn(request, response);
    }
}
