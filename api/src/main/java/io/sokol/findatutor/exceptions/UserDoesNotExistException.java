package io.sokol.findatutor.exceptions;

public class UserDoesNotExistException extends Exception {
    public UserDoesNotExistException() {
        super("User with given email does not exist");
    }
}
