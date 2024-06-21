package kacperrenkel.postapp.backend.post;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final PostMapper mapper = PostMapper.INSTANCE;

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
}
