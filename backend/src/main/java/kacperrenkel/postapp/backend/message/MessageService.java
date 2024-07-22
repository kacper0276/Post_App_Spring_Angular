package kacperrenkel.postapp.backend.message;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public List<Message> getMessagesBetweenUsers(String user1, String user2) {
        return messageRepository.findByMessageFromUsernameAndMessageToUsernameOrMessageFromUsernameAndMessageToUsername(
                user1, user2, user2, user1);
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    public List<Message> getLastMessagesForUser(String username) {
        return messageRepository.findLastMessagesForUser(username);
    }
}
