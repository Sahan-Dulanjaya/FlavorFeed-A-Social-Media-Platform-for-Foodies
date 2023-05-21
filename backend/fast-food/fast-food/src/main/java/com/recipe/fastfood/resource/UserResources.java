package com.recipe.fastfood.resource;

import com.recipe.fastfood.entity.User;
import com.recipe.fastfood.security.CurrentUser;
import com.recipe.fastfood.security.UserPrincipal;
import com.recipe.fastfood.service.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserResources {

    private final UserServiceImpl userService;

    public UserResources(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping("/user/me")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return this.userService.getByUserId(userPrincipal.getId());
    }

    @GetMapping("/user/all")
    public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @DeleteMapping("/user/delete/{id}")
    public Map<String, String> deleteUserById(@PathVariable String id) {
        return userService.deleteUserById(id);
    }

    @PutMapping("/user/edit/{id}")
    public User editUserById(@PathVariable String id, @RequestBody User user) {
        return userService.editUserById(id, user);
    }


}
