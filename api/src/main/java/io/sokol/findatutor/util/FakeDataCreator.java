package io.sokol.findatutor.util;

import io.sokol.findatutor.repository.*;

public class FakeDataCreator {

    public void run(PersonRepository personRepo, TutorRepository tutorRepo, ReviewRepository reviewRepo,
                        LocationRepository locationRepo, SubjectRepository subjectRepo) {
        new FakeLocationCreator().run(locationRepo);
        new FakeSubjectCreator().run(subjectRepo);
        new FakePersonCreator().run(personRepo, locationRepo, subjectRepo);
        new FakeReviewCreator().run(personRepo, tutorRepo, reviewRepo);
    }
}
