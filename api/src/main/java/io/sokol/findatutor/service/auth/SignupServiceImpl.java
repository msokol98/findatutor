package io.sokol.findatutor.service.auth;

import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.exceptions.UserAlreadyExistsException;
import io.sokol.findatutor.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service("signupService")
public class SignupServiceImpl implements SignupService {

    @Autowired
    private PersonRepository personRepo;

    @Override
    public ResponseEntity<?> registerUser(Person p) throws UserAlreadyExistsException {
        Optional<Person> optP = personRepo.findByEmail(p.getEmail());

        if(optP.isPresent())
            throw new UserAlreadyExistsException();

        personRepo.save(p);
        return ResponseEntity.ok().build();
    }
}
