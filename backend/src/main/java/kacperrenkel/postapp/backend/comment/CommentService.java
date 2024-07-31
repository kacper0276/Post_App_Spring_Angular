package kacperrenkel.postapp.backend.comment;

import kacperrenkel.postapp.backend.post.Post;
import kacperrenkel.postapp.backend.post.PostRepository;
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

        commentRepository.findByPostId(postId).forEach(comment -> {
            comments.add(commentMapper.commentToCommentDto(comment));
        });

        return comments;
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
