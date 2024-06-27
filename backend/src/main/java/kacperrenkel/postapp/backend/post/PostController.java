package kacperrenkel.postapp.backend.post;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/posts")
@AllArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping(path = "/")
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id) {
        return ResponseEntity.ok(postService.getPostById(id));
    }

    @GetMapping(path = "/users/{userID}")
    public ResponseEntity<List<PostDTO>> getPostsByUser(@PathVariable Integer userID) {
        return ResponseEntity.ok(postService.getPostsByUser(userID));
    }
}
