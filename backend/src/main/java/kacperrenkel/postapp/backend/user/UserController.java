package kacperrenkel.postapp.backend.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kacperrenkel.postapp.backend.exceptions.ObjectNotExistInDBException;
import kacperrenkel.postapp.backend.util.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
