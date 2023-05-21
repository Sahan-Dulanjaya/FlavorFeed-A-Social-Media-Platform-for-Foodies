package com.recipe.fastfood.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "likes")
public class Like {
    @Id
    private String id;

    private String userId;

    private String postId;

    private LocalDateTime likedTime;

    private User likedUser;

}
