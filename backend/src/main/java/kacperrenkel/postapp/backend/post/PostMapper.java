package kacperrenkel.postapp.backend.post;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface PostMapper {
    PostMapper INSTANCE = Mappers.getMapper(PostMapper.class);

    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "userProfileImage", source = "user.image")
    PostDTO postToPostDto(Post post);
}
