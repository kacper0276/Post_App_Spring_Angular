package kacperrenkel.postapp.backend.post;

import kacperrenkel.postapp.backend.comment.Comment;
import kacperrenkel.postapp.backend.comment.CommentRepository;
import kacperrenkel.postapp.backend.entity.PaginatedResponse;
import kacperrenkel.postapp.backend.user.User;
import kacperrenkel.postapp.backend.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.*;


@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final UserService userService;
    private final PostMapper mapper = PostMapper.INSTANCE;
    private final CommentRepository commentRepository;

    @Value("${frontend.assets.path}")
    private String frontendAssetsPath;

    public List<PostDTO> getAllPosts(){
        List<PostDTO> posts = new ArrayList<>();

        postRepository.findAll().forEach(post -> posts.add(mapper.postToPostDto(post)));

        return posts;
    }

    public PaginatedResponse<PostDTO> getAllPostPageable(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Post> postPage = postRepository.findAll(pageable);
        return mapper.pageToPaginatedResponse(postPage);
    }

    public Post getPostById(int id){
        Optional<Post> post = postRepository.findById(id);

        return post.orElse(null);
    }

    public List<PostDTO> getPostsByUserId(int userId){
        List<PostDTO> posts = new ArrayList<>();

        postRepository.findByUserId(userId).forEach(post -> posts.add(mapper.postToPostDto(post)));

        return posts;
    }

    public List<Comment> getCommentsInPost(int postId){
        return postRepository.findById(postId)
                .map(Post::getComments)
                .orElse(Collections.emptyList());
    }

    public Post savePostWithImage(Post post, MultipartFile imageFile) {
        if (imageFile != null && !imageFile.isEmpty()) {
            String originalFileName = imageFile.getOriginalFilename();
            String fileExtension = "";
            if (originalFileName != null && originalFileName.contains(".")) {
                fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));
            }
            String uniqueFileName = UUID.randomUUID() + fileExtension;

            String uploadDir = frontendAssetsPath + "/posts-images/";
            Path uploadPath = Paths.get(uploadDir);

            try {
                if (!Files.exists(uploadPath)) {
                    Files.createDirectories(uploadPath);
                }
                User user = userService.getByUsername(post.getAuthor());
                Path filePath = uploadPath.resolve(uniqueFileName);
                Files.copy(imageFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
                post.setImage(uniqueFileName);
                post.setUser(user);
            } catch (IOException e) {
                throw new RuntimeException("Failed to store file", e);
            }
        }
        return postRepository.save(post);
    }

    public List<PostDTO> getPostsByUsername(String username){
        List<PostDTO> posts = new ArrayList<>();

        postRepository.findByAuthor(username).forEach(post -> posts.add(mapper.postToPostDto(post)));

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

        assert post != null;
        post.getComments().add(comment);
        commentRepository.save(comment);
        postRepository.save(post);
    }
}
