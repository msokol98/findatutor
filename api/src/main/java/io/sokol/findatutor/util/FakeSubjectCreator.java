package io.sokol.findatutor.util;

import io.sokol.findatutor.repository.SubjectRepository;


public class FakeSubjectCreator {

    public void run(SubjectRepository subjectRepo) {
        Subjects.data.forEach(subjectRepo::save);
    }
}
