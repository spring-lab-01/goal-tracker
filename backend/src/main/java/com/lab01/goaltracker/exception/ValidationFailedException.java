package com.lab01.goaltracker.exception;

public class ValidationFailedException extends RuntimeException {

    public ValidationFailedException(String resource, String error) {
        super(String.format("Validation failed for %s - %s", resource, error));
    }
}
