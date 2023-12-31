package com.lab01.goaltracker.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class AppExceptionHandler {


    @ExceptionHandler
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleResourceNotFoundException(ResourceNotFoundException ex){
        return ex.getMessage();
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleValidationFailedException(ValidationFailedException ex) {
        return ex.getMessage();
    }
}

