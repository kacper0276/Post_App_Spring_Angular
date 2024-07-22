package kacperrenkel.postapp.backend.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
    List<Message> findByMessageFromUsernameOrMessageToUsername(String messageFromUsername, String messageToUsername);
    List<Message> findByMessageFromUsernameAndMessageToUsernameOrMessageFromUsernameAndMessageToUsername(
            String messageFromUsername1, String messageToUsername1,
            String messageFromUsername2, String messageToUsername2);

    @Query("SELECT m FROM Message m WHERE m.time IN (" +
            "SELECT MAX(m2.time) FROM Message m2 WHERE m2.messageFromUsername = :username OR m2.messageToUsername = :username " +
            "GROUP BY CASE WHEN m2.messageFromUsername = :username THEN m2.messageToUsername ELSE m2.messageFromUsername END)")
    List<Message> findLastMessagesForUser(String username);
}
