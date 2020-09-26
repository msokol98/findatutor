package io.sokol.findatutor.controller;

import io.sokol.findatutor.dto.PersonDTO;
import io.sokol.findatutor.exceptions.UserDoesNotExistException;
import io.sokol.findatutor.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/api/persons")
    private PersonDTO getPersonByEmail(@RequestParam("email") String email) throws UserDoesNotExistException {
        return personService.getPersonByEmail(email);
    }

}
