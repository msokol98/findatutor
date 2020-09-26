package io.sokol.findatutor.dto;

import io.sokol.findatutor.entity.Person;

public class PersonDTO {

    private Person person;

    public PersonDTO(Person person) {
        this.person = person;
    }

    public String getName() {
        return person.getFirstName() + " " + person.getLastName();
    }

    public String getEmail() {
        return person.getEmail();
    }

    public String getProfilePictureURI() {
        return person.getProfilePictureURI();
    }

    public String getRole() {
        return person.getClass().toString().substring(33).toLowerCase();
    }

}
