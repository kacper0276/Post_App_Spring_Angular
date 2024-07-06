package kacperrenkel.postapp.backend.post;

import kacperrenkel.postapp.backend.comment.Comment;
import kacperrenkel.postapp.backend.comment.CommentDTO;
import kacperrenkel.postapp.backend.comment.CommentMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface PostMapper {
    PostMapper INSTANCE = Mappers.getMapper(PostMapper.class);

    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "userProfileImage", source = "user.image")
    @Mapping(target = "comments", expression = "java(mapComments(post.getComments()))")
    PostDTO postToPostDto(Post post);

    default List<CommentDTO> mapComments(List<Comment> comments) {
        return comments.stream()
                .map(CommentMapper.INSTANCE::commentToCommentDto)
                .collect(Collectors.toList());
    }
}
