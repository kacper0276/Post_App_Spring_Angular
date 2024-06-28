package kacperrenkel.postapp.backend.post;

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
        System.out.println(username);
        System.out.println(postId);

        Post post = postRepository.findById(postId).orElse(null);
        if (post != null){
           post.setLikes(post.getLikes() + 1);
           postRepository.save(post);
        }

        User user = userService.getByUsername(username);

        if (user != null){
            user.getLikes().add(String.valueOf(postId));
            user.setLikes(user.getLikes());
            userService.saveUser(user);
        }
    }
}
