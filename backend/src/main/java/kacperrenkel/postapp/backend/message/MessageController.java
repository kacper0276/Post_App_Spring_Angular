package kacperrenkel.postapp.backend.message;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;
}
