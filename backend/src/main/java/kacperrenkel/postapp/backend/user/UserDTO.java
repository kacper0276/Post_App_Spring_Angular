package kacperrenkel.postapp.backend.user;

import jakarta.persistence.Convert;
import kacperrenkel.postapp.backend.util.StringListConverter;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {
    private int id;
    private String username;
    private String email;
    private Role role;
    private String image;
    @Convert(converter = StringListConverter.class)
    private List<String> likes;
}
