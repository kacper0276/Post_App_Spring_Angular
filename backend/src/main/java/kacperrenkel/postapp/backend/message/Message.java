package kacperrenkel.postapp.backend.message;

import jakarta.persistence.*;
import kacperrenkel.postapp.backend.user.User;
import lombok.*;

import java.util.Date;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String text;
    private Date time;
    private String messageFromUsername;
    private String messageToUsername;
}