package com.lab01.goaltracker.exception;

public class ResourceNotFoundException extends RuntimeException {


    public ResourceNotFoundException(String resource, Long id) {
        super(String.format("%s not found with id %s", resource, id));
    }
}
