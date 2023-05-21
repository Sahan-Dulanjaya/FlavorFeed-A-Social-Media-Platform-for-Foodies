package com.recipe.fastfood.service;

import com.recipe.fastfood.entity.Comment;
import com.recipe.fastfood.entity.Like;
import com.recipe.fastfood.entity.Post;
import com.recipe.fastfood.entity.User;
import com.recipe.fastfood.repository.CommentRepository;
import com.recipe.fastfood.repository.LikeRepository;
import com.recipe.fastfood.repository.PostRepository;
import com.recipe.fastfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {


    private final PostRepository postRepository;

    private final CommentRepository commentRepository;

    private final LikeRepository likeRepository;

    private final UserRepository userRepository;

    public PostServiceImpl(PostRepository postRepository, CommentRepository commentRepository, LikeRepository likeRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
        this.userRepository = userRepository;
    }


    @Override
    public List<Post> getAllPosts() {
        List<Post> posts = postRepository.findAll();
        posts.forEach(this::mapValuesToPost);
        return posts;
    }

    @Override
    public Optional<Post> getPostById(String postId) {
        Optional<Post> post = postRepository.findById(postId);
        post.ifPresent(this::mapValuesToPost);
        return post;
    }

    @Override
    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deletePostById(String postId) {
        postRepository.deleteById(postId);
    }

    private void mapValuesToPost(Post post) {
        List<Comment> comments = commentRepository.findByPostId(post.getId());
        if (comments != null) {
            post.setComments(comments);
            comments.forEach(comment -> {
                Optional<User> user = userRepository.findById(comment.getUserId());
                user.ifPresent(comment::setCommentedUser);
            });
        }
        List<Like> likes = likeRepository.findByPostId(post.getId());
        if (comments != null) {
            post.setLikes(likes);
        }
        if (post.getUserId() != null) {
            Optional<User> user = userRepository.findById(post.getId());
            user.ifPresent(post::setPostedUser);
        }
    }

}
