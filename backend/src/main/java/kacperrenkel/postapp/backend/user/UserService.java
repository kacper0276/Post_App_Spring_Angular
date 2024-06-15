package kacperrenkel.postapp.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null) {
            user.setRole(Role.User);
        }
        System.out.printf(user.getPassword());
        System.out.printf(user.getEmail());
        System.out.printf(user.getUsername());
        System.out.printf(user.getRole() + "");
        return userRepository.save(user);
    }
}
