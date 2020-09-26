package io.sokol.findatutor.service.auth;

import io.sokol.findatutor.dto.PersonDTO;
import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserDoesNotExistException;
import io.sokol.findatutor.repository.PersonRepository;
import io.sokol.findatutor.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("personService")
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepo;

    @Override
    public PersonDTO getPersonByEmail(String email) throws UserDoesNotExistException {
        Optional<Person> optPerson = personRepo.findByEmail(email);
        optPerson.orElseThrow(UserDoesNotExistException::new);
        return new PersonDTO(optPerson.get());
    }
}
