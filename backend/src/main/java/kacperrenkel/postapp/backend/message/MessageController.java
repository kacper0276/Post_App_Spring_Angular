package kacperrenkel.postapp.backend.message;

import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Message sendMessage(Message message, SimpMessageHeaderAccessor headerAccessor) {
        message.setTime(new Date());
        return messageService.saveMessage(message);
    }

    @GetMapping("/messages")
    public List<Message> getMessagesBetweenUsers(
            @RequestParam String user1,
            @RequestParam String user2) {
        return messageService.getMessagesBetweenUsers(user1, user2);
    }

    @GetMapping("/lastMessages")
    public List<Message> getLastMessagesForUser(@RequestParam String username) {
        return messageService.getLastMessagesForUser(username);
    }
}
