package ru.lorquotes.util.converters;

import org.springframework.core.convert.converter.Converter;
import org.springframework.data.convert.ReadingConverter;

import java.time.DateTimeException;
import java.time.LocalDateTime;

@ReadingConverter
public class StringToLocalDateTimeConverter implements Converter<String, LocalDateTime>{

    @Override
    public LocalDateTime convert(String source) {
        try {
            return LocalDateTime.parse(source);
        } catch (DateTimeException e) {
           return null;
        }
    }
}
