package kacperrenkel.postapp.backend.comment;

import kacperrenkel.postapp.backend.util.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/comments")
@RestController
@RequiredArgsConstructor
public class CommentController {
    private final CommentService commentService;

    @GetMapping(path = "/{postId}")
    public ResponseEntity<List<CommentDTO>> getComments(@PathVariable int postId) {
        return ResponseEntity.ok(commentService.getCommentsByPostId(postId));
    }

    @PostMapping(path = "/add")
    public ResponseEntity<Response> addComment(@RequestParam String username, @RequestParam int postId, @RequestBody String comment) {
        commentService.addComment(username, postId, comment);
        return ResponseEntity.ok(new Response("Dodano komentarz"));
    }

    @DeleteMapping(path = "/delete/{commentId}")
    public ResponseEntity<Response> deleteComment(@PathVariable int commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.ok(new Response("Usunięto komentarz"));
    }

    @PatchMapping(path = "/edit/{commentId}")
    public ResponseEntity<Response> editComment(@PathVariable int commentId, @RequestBody String newContent) {
        commentService.editComment(commentId, newContent);
        return ResponseEntity.ok(new Response("Zaktualizowano komentarz"));
    }
}
