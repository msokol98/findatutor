package io.sokol.findatutor.controller;

import io.sokol.findatutor.entity.Pupil;
import io.sokol.findatutor.entity.Tutor;
import io.sokol.findatutor.exceptions.UserAlreadyExistsException;
import io.sokol.findatutor.service.auth.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class SignupController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/pupil")
    public ResponseEntity<?> registerUser(@RequestBody Pupil pupil) throws UserAlreadyExistsException {
        return signupService.registerUser(pupil);
    }

    @PostMapping("/tutor")
    public ResponseEntity<?> registerUser(@RequestBody Tutor tutor) throws UserAlreadyExistsException {
        return signupService.registerUser(tutor);
    }

}


