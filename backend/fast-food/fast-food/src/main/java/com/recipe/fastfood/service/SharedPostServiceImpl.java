package com.recipe.fastfood.service;


import com.recipe.fastfood.entity.Comment;
import com.recipe.fastfood.entity.Like;
import com.recipe.fastfood.entity.Post;
import com.recipe.fastfood.entity.SharedPost;
import com.recipe.fastfood.entity.User;
import com.recipe.fastfood.repository.CommentRepository;
import com.recipe.fastfood.repository.LikeRepository;
import com.recipe.fastfood.repository.SharedPostRepository;
import com.recipe.fastfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SharedPostServiceImpl implements SharedPostService {

    private final SharedPostRepository sharedPostRepository;

    private final CommentRepository commentRepository;

    private final LikeRepository likeRepository;

    private final UserRepository userRepository;

    private final PostServiceImpl postService;

    public SharedPostServiceImpl(SharedPostRepository sharedPostRepository, CommentRepository commentRepository, LikeRepository likeRepository, UserRepository userRepository, PostServiceImpl postService) {
        this.sharedPostRepository = sharedPostRepository;
        this.commentRepository = commentRepository;
        this.likeRepository = likeRepository;
        this.userRepository = userRepository;
        this.postService = postService;
    }

    @Override
    public List<SharedPost> getAllSharedPosts() {
        List<SharedPost> sharedPosts = this.sharedPostRepository.findAll();
        sharedPosts.forEach(this::mapValuesToShardPost);
        return sharedPosts;
    }

    @Override
    public Optional<SharedPost> getSharedPostById(String id) {
        Optional<SharedPost> sharedPost = sharedPostRepository.findById(id);
        sharedPost.ifPresent(this::mapValuesToShardPost);
        return sharedPost;
    }

    @Override
    public SharedPost createSharedPost(SharedPost sharedPost) {
        return sharedPostRepository.save(sharedPost);
    }

    @Override
    public SharedPost updateSharedPost(String id, SharedPost sharedPost) {
        Optional<SharedPost> optionalSharedPost = sharedPostRepository.findById(id);
        if (optionalSharedPost.isPresent()) {
            sharedPost.setId(id);
            return sharedPostRepository.save(sharedPost);
        }
        return null;
    }

    @Override
    public void deleteSharedPost(String id) {
        sharedPostRepository.deleteById(id);
    }

    private void mapValuesToShardPost(SharedPost sharedPost) {
        List<Comment> comments = commentRepository.findByPostId(sharedPost.getId());
        if (comments != null) {
            sharedPost.setComments(comments);
            comments.forEach(comment -> {
                Optional<User> user = userRepository.findById(comment.getUserId());
                user.ifPresent(comment::setCommentedUser);
            });
        }
        List<Like> likes = likeRepository.findByPostId(sharedPost.getId());
        if (comments != null) {
            sharedPost.setLikes(likes);
        }
        if (sharedPost.getUserId() != null) {
            Optional<User> user = userRepository.findById(sharedPost.getId());
            user.ifPresent(sharedPost::setPostedUser);
        }
        if (sharedPost.getParentPostId() != null) {
            Optional<Post> post = postService.getPostById(sharedPost.getParentPostId());
            post.ifPresent(sharedPost::setSharedPost);
        }
    }
}
