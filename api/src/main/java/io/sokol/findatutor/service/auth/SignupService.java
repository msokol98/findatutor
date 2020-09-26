package io.sokol.findatutor.service.auth;

import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserAlreadyExistsException;
import org.springframework.http.ResponseEntity;

public interface SignupService {
    ResponseEntity<?> registerUser(Person p) throws UserAlreadyExistsException;
}
