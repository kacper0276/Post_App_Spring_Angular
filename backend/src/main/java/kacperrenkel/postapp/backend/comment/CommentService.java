package kacperrenkel.postapp.backend.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper = CommentMapper.INSTANCE;

    public List<CommentDTO> getCommentsByPostId(int postId) {
        List<CommentDTO> comments = new ArrayList<>();

        commentRepository.findByPostId(postId).forEach(comment -> {
            comments.add(commentMapper.commentToCommentDto(comment));
        });

        return comments;
    }
}
