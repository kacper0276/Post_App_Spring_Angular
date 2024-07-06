package kacperrenkel.postapp.backend.post;

import jakarta.persistence.Convert;
import kacperrenkel.postapp.backend.comment.CommentDTO;
import kacperrenkel.postapp.backend.util.StringListConverter;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDTO {
    private int id;

    private String title;
    private String content;
    private String author;
    private int likes;
    private String image;
    private Date created;

    private List<CommentDTO> comments;

    private int userId;
    private String userProfileImage;
}
