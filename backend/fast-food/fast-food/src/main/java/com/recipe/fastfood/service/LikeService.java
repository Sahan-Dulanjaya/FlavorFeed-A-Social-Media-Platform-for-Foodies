package com.recipe.fastfood.service;


import com.recipe.fastfood.entity.Like;

public interface LikeService {
    void addLike(Like like);

    void removeLikeById(String likeId);
}
