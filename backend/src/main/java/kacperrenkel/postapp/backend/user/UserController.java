package kacperrenkel.postapp.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/users")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class UserController {
    private final UserService userService;
}
