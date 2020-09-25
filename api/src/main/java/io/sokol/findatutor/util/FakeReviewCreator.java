package io.sokol.findatutor.util;

import com.github.javafaker.Faker;
import io.sokol.findatutor.entity.Person;
import io.sokol.findatutor.entity.Pupil;
import io.sokol.findatutor.entity.Review;
import io.sokol.findatutor.entity.Tutor;
import io.sokol.findatutor.repository.PersonRepository;
import io.sokol.findatutor.repository.ReviewRepository;
import io.sokol.findatutor.repository.TutorRepository;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.Random;

public class FakeReviewCreator {

    private final Faker faker = new Faker();

    public void run(PersonRepository personRepo, TutorRepository tutorRepo, ReviewRepository reviewRepo) {
        List<Tutor> tutors = tutorRepo.findAll();

        tutors.forEach(tutor -> {
            for(int i = 0; i < Math.floor(Math.random() * 60); i++) {
                Review review = new Review();
                review.setHeader(faker.lorem().characters(20, true, false));
                review.setBody(faker.lorem().paragraph(10));
                review.setTutor(tutor);
                review.setPupil(getRandomPupil(personRepo));
                review.setRating(Math.min(5, getRandomInt(2, 8)));
                reviewRepo.save(review);
            }
        });
    }

    private Pupil getRandomPupil(PersonRepository personRepo) {
        int nums = (int) personRepo.count();
        for(;;) {
            Optional<Person> optPerson = personRepo.findById((long) getRandomInt(0, nums-1));

            if(optPerson.isEmpty())
                continue;

            Person person = optPerson.get();

            if(person.getClass() == Pupil.class)
                return (Pupil) person;
        }
    }

    private int getRandomInt(int min, int max) {
        return new Random().nextInt((max - min) + 1) + min;
    }
}
