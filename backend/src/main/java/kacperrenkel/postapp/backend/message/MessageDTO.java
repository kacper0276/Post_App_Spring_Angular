package kacperrenkel.postapp.backend.message;

import kacperrenkel.postapp.backend.user.User;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Builder
public class MessageDTO {
    private int id;
    private String text;
    private Date time;
    private String messageFromUsername;
    private String messageToUsername;
}
