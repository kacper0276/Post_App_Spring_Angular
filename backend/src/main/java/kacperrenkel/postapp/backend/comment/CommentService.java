package kacperrenkel.postapp.backend.comment;

import kacperrenkel.postapp.backend.post.Post;
import kacperrenkel.postapp.backend.post.PostRepository;
import kacperrenkel.postapp.backend.user.User;
import kacperrenkel.postapp.backend.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    private final UserService userService;
    private final CommentMapper commentMapper = CommentMapper.INSTANCE;

    public List<CommentDTO> getCommentsByPostId(int postId) {
        List<CommentDTO> comments = new ArrayList<>();

        for (Comment comment : commentRepository.findByPostId(postId)) {
            comments.add(commentMapper.commentToCommentDto(comment));
        }

        return comments;
    }

    public void addComment(final String username, final int postId, final String commentContent) {
        Post post = postRepository.findById(postId).orElse(null);
        User user = userService.getByUsername(username);

        Comment comment = new Comment();
        comment.setUser(user);
        comment.setContent(commentContent);
        comment.setPost(post);

        assert post != null;
        post.getComments().add(comment);
        commentRepository.save(comment);
        postRepository.save(post);
    }

    public void deleteComment(int commentId) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        if (comment != null) {
            Post post = comment.getPost();
            post.getComments().remove(comment);
            commentRepository.delete(comment);
            postRepository.save(post);
        }
    }

    public void editComment(int commentId, String newContent) {
        Comment comment = commentRepository.findById(commentId).orElse(null);
        if (comment != null) {
            comment.setContent(newContent);
            commentRepository.save(comment);
        }
    }
}
