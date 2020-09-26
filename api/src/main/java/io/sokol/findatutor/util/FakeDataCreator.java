package io.sokol.findatutor.util;

import io.sokol.findatutor.repository.*;
import org.springframework.security.crypto.password.PasswordEncoder;

public class FakeDataCreator {

    public void run(PersonRepository personRepo, TutorRepository tutorRepo, ReviewRepository reviewRepo,
                    LocationRepository locationRepo, SubjectRepository subjectRepo, PasswordEncoder isWelcomeComplete) {
        new FakeLocationCreator().run(locationRepo);
        new FakeSubjectCreator().run(subjectRepo);
        new FakePersonCreator().run(personRepo, locationRepo, subjectRepo, isWelcomeComplete);
        new FakeReviewCreator().run(personRepo, tutorRepo, reviewRepo);
    }
}
