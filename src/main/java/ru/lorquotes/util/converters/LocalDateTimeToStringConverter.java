package ru.lorquotes.util.converters;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.WritingConverter;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static ru.lorquotes.util.converters.MongoConvertersConfig.DATETIME_PATTERN;

@WritingConverter
public class LocalDateTimeToStringConverter implements Converter<LocalDateTime, String> {
    @Override
    public String convert(LocalDateTime source) {
        return source.format(DateTimeFormatter.ofPattern(DATETIME_PATTERN));
    }
}
