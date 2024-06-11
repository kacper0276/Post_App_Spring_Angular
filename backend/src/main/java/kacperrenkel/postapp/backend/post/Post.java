package kacperrenkel.postapp.backend.post;

import jakarta.persistence.*;
import kacperrenkel.postapp.backend.util.StringListConverter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "posty")
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
    @Convert(converter = StringListConverter.class)
    private List<String> comments;
    private String image;
}
