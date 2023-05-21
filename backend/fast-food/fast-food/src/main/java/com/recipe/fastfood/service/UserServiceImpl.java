package com.recipe.fastfood.service;

import com.recipe.fastfood.entity.User;
import com.recipe.fastfood.exception.DataNotFoundException;
import com.recipe.fastfood.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getByUserId(String id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElseGet(User::new);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Map<String, String> deleteUserById(String id) {
        Map<String, String> response = new HashMap<>();
        userRepository.deleteById(id);
        response.put("response", "success");
        return response;
    }

    @Override
    public User editUserById(String id, User user) {
        Optional<User> oldUser = userRepository.findById(id);
        if (oldUser.isPresent()) {
            userRepository.save(user);
        } else {
            return new User();
        }
        return user;
    }
}
