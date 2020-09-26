package io.sokol.findatutor.dto;

import io.sokol.findatutor.entity.Person;

public class PersonDTO {

    private static final String DEFAULT_PROFILE_PICTURE_URI =
            "https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg";

    private Person person;

    public PersonDTO(Person person) {
        this.person = person;
    }

    public long getId() {
        return person.getId();
    }

    public String getName() {
        return person.getFirstName() + " " + person.getLastName();
    }

    public String getEmail() {
        return person.getEmail();
    }

    public String getProfilePictureURI() {
        return person.getProfilePictureURI() == null ? DEFAULT_PROFILE_PICTURE_URI : person.getProfilePictureURI();
    }

    public String getRole() {
        return person.getClass().toString().substring(33).toLowerCase();
    }

    public boolean isWelcomeComplete() {
        return person.isWelcomeComplete();
    }

}
