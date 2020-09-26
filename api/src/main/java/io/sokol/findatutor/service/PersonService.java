package io.sokol.findatutor.service;

import io.sokol.findatutor.dto.PersonDTO;
import io.sokol.findatutor.exceptions.UserDoesNotExistException;

public interface PersonService {
    PersonDTO getPersonByEmail(String email) throws UserDoesNotExistException;
    PersonDTO postWelcomingPerson(long id) throws UserDoesNotExistException;
}
