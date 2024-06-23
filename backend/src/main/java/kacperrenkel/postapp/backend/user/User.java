package kacperrenkel.postapp.backend.user;

import jakarta.persistence.*;
import kacperrenkel.postapp.backend.post.Post;
import kacperrenkel.postapp.backend.util.StringListConverter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;
    private String username;
    private String password;
    private boolean activated = false;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Convert(converter = StringListConverter.class)
    private List<String> likes;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Post> posts;
}
