package kacperrenkel.postapp.backend.user;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        if (user.getRole() == null) {
            user.setRole(Role.User);
        }

        return userRepository.save(user);
    }

    public User loginUser(User user) {
        User loginUser = userRepository.findByUsername(user.getUsername()).orElse(null);

        if (loginUser != null && passwordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
            return loginUser;
        }

        return null;
    }
}
