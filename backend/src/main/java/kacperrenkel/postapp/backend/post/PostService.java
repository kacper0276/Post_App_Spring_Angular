package kacperrenkel.postapp.backend.post;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public List<Post> getAllPosts(){
        return postRepository.findAll();
    }

    public Post getPostById(int id){
        Optional<Post> post = postRepository.findById(id);

        return post.orElse(null);

    }
}
