package kacperrenkel.postapp.backend.post;

import kacperrenkel.postapp.backend.util.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

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

    @PatchMapping(path = "/add-like")
    public ResponseEntity<Response> addLike(@AuthenticationPrincipal @RequestParam String username, @RequestParam int postId) {
        postService.addLike(username, postId);
        return ResponseEntity.ok(new Response("Dodano like"));
    }
}
