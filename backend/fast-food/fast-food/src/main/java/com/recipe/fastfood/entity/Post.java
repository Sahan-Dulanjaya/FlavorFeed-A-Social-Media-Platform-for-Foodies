package com.recipe.fastfood.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Document(collection = "posts")
public class Post {

    @Id
    private String id;

    private String userId;

    private List<String> imageUrl;

    private String description;

    private LocalDateTime postedTime;

    private User postedUser;

    private List<Comment> comments;

    private List<Like> likes;

}
