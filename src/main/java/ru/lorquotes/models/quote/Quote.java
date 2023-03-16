package ru.lorquotes.models.quote;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Getter
@Builder(toBuilder = true)
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Document(collection = "quotes")
public class Quote {
    @Id
    private String id;

    @Field(name = "text")
    private String quote;

    @Field(name = "user")
    private String author;

    @Field(name = "date")
    private LocalDateTime dateTime;

}
