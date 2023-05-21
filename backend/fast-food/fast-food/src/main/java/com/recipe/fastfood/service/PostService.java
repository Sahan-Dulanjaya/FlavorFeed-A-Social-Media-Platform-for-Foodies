package com.recipe.fastfood.service;

import com.recipe.fastfood.entity.Post;

import java.util.List;
import java.util.Optional;

public interface PostService {

    List<Post> getAllPosts();

    Optional<Post> getPostById(String postId);

    Post createPost(Post post);

    Post updatePost(Post post);

    void deletePostById(String postId);
}
