package kacperrenkel.postapp.backend.comment;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CommentMapper {
    CommentMapper INSTANCE = Mappers.getMapper(CommentMapper.class);

    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "image", source = "user.image")
    CommentDTO commentToCommentDto(Comment comment);
}