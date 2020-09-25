package io.sokol.findatutor.exceptions;

public class UserAlreadyExistsException extends Exception {

    public UserAlreadyExistsException() {
        super("User with given username or email already exists.");
    }
}
