package kacperrenkel.postapp.backend.configuration;

import kacperrenkel.postapp.backend.exceptions.ObjectExistInDBException;
import kacperrenkel.postapp.backend.exceptions.ObjectNotExistInDBException;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import lombok.Value;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @Value
    public static class ExceptionRestResponse {
        int code;
        String message;
    }

    @ExceptionHandler(ObjectExistInDBException.class)
    public ExceptionRestResponse objectExistInDBException(ObjectExistInDBException e) {
        return new ExceptionRestResponse(500, e.getMessage());
    }

    @ExceptionHandler(ObjectNotExistInDBException.class)
    public ExceptionRestResponse objectNotExistInDBException(ObjectNotExistInDBException e) {
        return new ExceptionRestResponse(500, e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ExceptionRestResponse handleValidationExceptions(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(DefaultMessageSourceResolvable::getDefaultMessage)
                .toList();

        return new ExceptionRestResponse(500, errors.get(0));
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ExceptionRestResponse handleConstraintViolationExceptions(ConstraintViolationException ex) {
        List<String> errors = new ArrayList<>();
        for (ConstraintViolation<?> violation : ex.getConstraintViolations()) {
            errors.add(violation.getMessage());
        }
        return new ExceptionRestResponse(500, errors.get(0));
    }
}
