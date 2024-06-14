package kacperrenkel.postapp.backend.post;

import jakarta.persistence.*;
import kacperrenkel.postapp.backend.user.User;
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
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String content;
    private String author;
    private int likes;
    private String image;

    @Convert(converter = StringListConverter.class)
    private List<String> comments;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "uzytkownik_id")
    private User user;
}
