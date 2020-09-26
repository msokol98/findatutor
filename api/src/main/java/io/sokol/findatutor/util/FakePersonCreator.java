package io.sokol.findatutor.util;

import com.github.javafaker.Faker;
import io.sokol.findatutor.entity.*;
import io.sokol.findatutor.repository.*;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

public class FakePersonCreator {

    public void run(PersonRepository personRepo, LocationRepository locationRepo, SubjectRepository subjectRepo, PasswordEncoder passwordEncoder) {
        List<Person> persons = parseJSON();
        persons.forEach(person -> {
            person.setLocation(locationRepo.getRandomLocation());

            if(person.getClass() == Tutor.class) {
                setSubjects((Tutor) person, subjectRepo);
            }

            person.setPassword(passwordEncoder.encode(person.getPassword()));

            personRepo.save(person);
        });
    }

    private List<Person> parseJSON()  {
        List<Person> persons = new ArrayList<>();
        JSONParser jsonParser = new JSONParser();

        try (FileReader reader = new FileReader("/home/mitchell/Projects/findatutor/api/src/main/resources/mock_people.json")) {
            JSONObject obj = (JSONObject) jsonParser.parse(reader);
            JSONArray people = (JSONArray) obj.get("results");

            people.stream().
                    map(this::setProperties).
                    forEach(person -> persons.add((Person) person));

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return persons;
    }

    private Person setProperties(Object personObj) {
        JSONObject personJSON = (JSONObject) personObj;
        Person person = Math.random() > .5 ? new Tutor() : new Pupil();
        JSONObject name = (JSONObject) personJSON.get("name");
        person.setFirstName(name.get("first").toString());
        person.setLastName(name.get("last").toString());
        JSONObject login = (JSONObject) personJSON.get("login");
        person.setPassword(login.get("password").toString());
        person.setEmail(personJSON.get("email").toString());
        JSONObject picture = (JSONObject) personJSON.get("picture");
        person.setProfilePictureURI(picture.get("large").toString());

        person.setMemberSince(new RandomDateGenerator().run());

        return person;
    }

    private void setSubjects(Tutor tutor, SubjectRepository subjectRepo) {
        HashSet<String> usedSubjects = new HashSet<>();
        for(int i = 0; i < Math.random() * 3; i++) {
            Subject s = getRandomSubject(subjectRepo);
            if(!usedSubjects.contains(s.getName())) {
                tutor.addSubject(s);
                usedSubjects.add(s.getName());
            }
        }
    }

    private Subject getRandomSubject(SubjectRepository subjectRepo) {
        Subject randSubject = Subjects.data.get(getRandomIndex(0, Subjects.data.size()));
        return subjectRepo.findByName(randSubject.getName()).get();
    }

    private int getRandomIndex(int min, int max) {
        return new Random().ints(min, max)
                .findFirst()
                .getAsInt();
    }


}
