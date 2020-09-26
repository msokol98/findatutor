package io.sokol.findatutor.service.auth;

import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserAlreadyExistsException;
import io.sokol.findatutor.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("signupService")
public class SignupServiceImpl implements SignupService {

    @Autowired
    private PersonRepository personRepo;

    /*@Autowired
    private PasswordEncoder passwordEncoder;*/

    @Override
    public ResponseEntity<?> registerUser(Person person) throws UserAlreadyExistsException {
        Optional<Person> optPerson = personRepo.findByEmail(person.getEmail());

        if(optPerson.isPresent())
            throw new UserAlreadyExistsException();

       ///person.setPassword(passwordEncoder.encode(person.getPassword()));

        personRepo.save(person);
        return ResponseEntity.ok().build();
    }
}
