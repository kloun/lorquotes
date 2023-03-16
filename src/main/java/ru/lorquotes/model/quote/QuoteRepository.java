package ru.lorquotes.model.quote;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface QuoteRepository extends MongoRepository<Quote, String> {
    List<Quote> findAllByAuthor(String author);

}