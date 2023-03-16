package ru.lorquotes.util.converters;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;

import java.util.Arrays;

@Configuration
public class MongoConvertersConfig {
    public static final String DATETIME_PATTERN = "dd.MM.yyyy HH:mm:ss";

    @Bean
    public MongoCustomConversions mongoCustomConversions() {

        return new MongoCustomConversions(
                Arrays.asList(
                        new LocalDateTimeToStringConverter(),
                        new StringToLocalDateTimeConverter()));
    }
}
