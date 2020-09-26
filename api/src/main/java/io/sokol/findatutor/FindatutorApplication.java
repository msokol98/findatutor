package io.sokol.findatutor;

import io.sokol.findatutor.repository.*;
import io.sokol.findatutor.util.FakeDataCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class FindatutorApplication implements CommandLineRunner {

	@Autowired
	private SubjectRepository subjectRepo;

	@Autowired
	private PersonRepository personRepo;

	@Autowired
	private LocationRepository locationRepo;

	@Autowired
	private TutorRepository tutorRepo;

	@Autowired
	private ReviewRepository reviewRepo;
	public static void main(String[] args) {
		SpringApplication.run(FindatutorApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//new FakeDataCreator().run(personRepo, tutorRepo, reviewRepo, locationRepo, subjectRepo, passwordEncoder);
	}
}
