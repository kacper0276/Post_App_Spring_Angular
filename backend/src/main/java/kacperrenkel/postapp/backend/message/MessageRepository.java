package kacperrenkel.postapp.backend.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> findByMessageFromUsernameOrMessageToUsername(String messageFromUsername, String messageToUsername);
    List<Message> findByMessageFromUsernameAndMessageToUsernameOrMessageFromUsernameAndMessageToUsername(
            String messageFromUsername1, String messageToUsername1,
            String messageFromUsername2, String messageToUsername2);
}
