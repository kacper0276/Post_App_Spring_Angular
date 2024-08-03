package kacperrenkel.postapp.backend.post;

import kacperrenkel.postapp.backend.entity.PaginatedResponse;
import kacperrenkel.postapp.backend.util.Response;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(path = "/posts")
@AllArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping(path = "/all")
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    @GetMapping(path = "/")
    public ResponseEntity<PaginatedResponse<PostDTO>> getAllPosts(@RequestParam(defaultValue = "0") int page,
                                                                  @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(postService.getAllPostPageable(page, size));
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Integer id) {
        return ResponseEntity.ok(postService.getPostById(id));
    }

    @GetMapping(path = "/users/{userID}")
    public ResponseEntity<List<PostDTO>> getPostsByUser(@PathVariable Integer userID) {
        return ResponseEntity.ok(postService.getPostsByUserId(userID));
    }

    @GetMapping(path = "/users/username/{username}")
    public ResponseEntity<List<PostDTO>> getPostsByUsername(@PathVariable String username) {
        return ResponseEntity.ok(postService.getPostsByUsername(username));
    }

    @PostMapping(path = "/add", consumes = {"multipart/form-data"})
    public ResponseEntity<Post> addPostWithImage(
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("author") String author,
            @RequestParam(value = "image", required = false) MultipartFile image) {

        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);
        post.setAuthor(author);
        post.setCreated(new Date());

        Post savedPost = postService.savePost(post, image);
        return ResponseEntity.ok(savedPost);
    }

    @PatchMapping(path = "/edit", consumes = {"multipart/form-data"})
    public ResponseEntity<Post> editPostWithImage(
            @RequestParam("id") int id,
            @RequestParam("title") String title,
            @RequestParam("content") String content,
            @RequestParam("author") String author,
            @RequestParam(value = "image", required = false) MultipartFile image
    ) {
        Post post = new Post();
        post.setId(id);
        post.setTitle(title);
        post.setContent(content);
        post.setAuthor(author);

        Post editedPost = postService.editPostData(post, image);
        return ResponseEntity.ok(editedPost);
    }

    @PatchMapping(path = "/add-like")
    public ResponseEntity<Response> addLike(@RequestParam String username, @RequestParam int postId) {
        postService.addLike(username, postId);
        return ResponseEntity.ok(new Response("Dodano like"));
    }

    @PatchMapping(path = "/add-comment")
    public ResponseEntity<Response> addComment(@RequestParam String username, @RequestParam int postId, @RequestBody String comment) {
        postService.addComment(username, postId, comment);
        return ResponseEntity.ok(new Response("Dodano komentarz"));
    }
}
