package kacperrenkel.postapp.backend.post;

import kacperrenkel.postapp.backend.comment.Comment;
import kacperrenkel.postapp.backend.comment.CommentRepository;
import kacperrenkel.postapp.backend.user.User;
import kacperrenkel.postapp.backend.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserService userService;
    private final PostMapper mapper = PostMapper.INSTANCE;
    private final CommentRepository commentRepository;

    public List<PostDTO> getAllPosts(){
        List<PostDTO> posts = new ArrayList<>();

        postRepository.findAll().forEach(post -> {
            posts.add(mapper.postToPostDto(post));
        });

        return posts;
    }

    public Post getPostById(int id){
        Optional<Post> post = postRepository.findById(id);

        return post.orElse(null);
    }

    public List<PostDTO> getPostsByUser(int userId){
        List<PostDTO> posts = new ArrayList<>();

        postRepository.findByUserId(userId).forEach(post -> {
            posts.add(mapper.postToPostDto(post));
        });

        return posts;
    }

    public void addLike(final String username, final int postId){
        Post post = postRepository.findById(postId).orElse(null);

        User user = userService.getByUsername(username);

        if (user != null && post != null){
            List<String> likes = new ArrayList<>(user.getLikes());

            if (!likes.contains(String.valueOf(postId))) {
                post.setLikes(post.getLikes() + 1);
                postRepository.save(post);
                likes.add(String.valueOf(postId));
            } else {
                post.setLikes(post.getLikes() - 1);
                postRepository.save(post);
                likes.remove(String.valueOf(postId));
            }
            user.setLikes(likes);
            userService.saveUser(user);
        }
    }

    public void addComment(final String username, final int postId, final String commentContent){
        Post post = postRepository.findById(postId).orElse(null);
        User user = userService.getByUsername(username);

        Comment comment = new Comment();
        comment.setUser(user);
        comment.setContent(commentContent);
        comment.setPost(post);

        post.getComments().add(comment);
        commentRepository.save(comment);
        postRepository.save(post);
    }
}
