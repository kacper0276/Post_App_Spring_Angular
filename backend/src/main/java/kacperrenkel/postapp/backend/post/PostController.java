package kacperrenkel.postapp.backend.post;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/posts")
@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
public class PostController {
    private final PostService postService;
}
