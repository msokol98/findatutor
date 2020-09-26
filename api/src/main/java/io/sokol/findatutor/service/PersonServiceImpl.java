package io.sokol.findatutor.service;

import io.sokol.findatutor.dto.PersonDTO;
import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserDoesNotExistException;
import io.sokol.findatutor.repository.PersonRepository;
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

    @Override
    public PersonDTO postWelcomingPerson(long id) throws UserDoesNotExistException {
        Optional<Person> optPerson = personRepo.findById(id);
        optPerson.orElseThrow(UserDoesNotExistException::new);
        Person person = optPerson.get();
        person.setWelcomeComplete(true);
        personRepo.save(person);
        return new PersonDTO(person);
    }
}
