package ru.lorquotes.model.quote;

import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Getter
@Builder
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
