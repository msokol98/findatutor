package io.sokol.findatutor.controller;

import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserAlreadyExistsException;
import io.sokol.findatutor.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/register")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/person")
    public ResponseEntity<?> registerUser(@RequestBody Person person) throws UserAlreadyExistsException {
        return signupService.registerUser(person);
    }

}


