package com.recipe.fastfood.service;

import com.recipe.fastfood.entity.User;
import com.recipe.fastfood.exception.DataNotFoundException;
import com.recipe.fastfood.entity.Comment;
import com.recipe.fastfood.repository.CommentRepository;
import com.recipe.fastfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;

    private final UserRepository userRepository;

    public CommentServiceImpl(CommentRepository commentRepository, UserRepository userRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Comment> getCommentsByPostId(String postId) {
        return commentRepository.findByPostId(postId);
    }

    @Override
    public List<Comment> getCommentsByUserId(String userId) {
        return commentRepository.findByUserId(userId);
    }


    @Override
    public Comment addComment(Comment comment) {
        comment.setCommentedTime(LocalDateTime.now());
        Comment newComment = commentRepository.save(comment);
        Optional<User> user = userRepository.findById(newComment.getUserId());
        user.ifPresent(comment::setCommentedUser);
        return newComment;
    }

    @Override
    public Comment updateComment(Comment comment) {
        Optional<Comment> existingComment = commentRepository.findById(comment.getId());
        if (existingComment.isPresent()) {
            existingComment.get().setText(comment.getText());
            Comment updatedComment = commentRepository.save(existingComment.get());
            Optional<User> user = userRepository.findById(updatedComment.getUserId());
            user.ifPresent(updatedComment::setCommentedUser);
            return updatedComment;
        }
        return new Comment();
    }

    @Override
    public void deleteComment(String id, String userId) {
        Optional<Comment> comment = commentRepository.findById(id);
        if (comment.isPresent()) {
            if (!comment.get().getUserId().equals(userId)) {
                throw new DataNotFoundException("You dont have permission to delete this comment.");
            }
            commentRepository.deleteById(id);
        }

    }
}
