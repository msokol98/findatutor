package io.sokol.findatutor.entity;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
abstract public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String firstName;
    private String lastName;

    private String email;
    private String password;
    private String profilePictureURI;
    private LocalDate memberSince;

    private boolean welcomeComplete;

    @ManyToOne
    private Location location;

    public Person() { }

    public Person(String firstName, String lastName, String email,
                  String password, Location location, String profilePictureURI, LocalDate memberSince) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.location = location;
        this.profilePictureURI = profilePictureURI;
        this.memberSince = memberSince;
        this.welcomeComplete = false;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public LocalDate getMemberSince() {
        return memberSince;
    }

    public void setMemberSince(LocalDate memberSince) {
        this.memberSince = memberSince;
    }

    public String getProfilePictureURI() {
        return profilePictureURI;
    }

    public void setProfilePictureURI(String profilePictureURI) {
        this.profilePictureURI = profilePictureURI;
    }

    public boolean isWelcomeComplete() {
        return welcomeComplete;
    }

    public void setWelcomeComplete(boolean welcomeComplete) {
        this.welcomeComplete = welcomeComplete;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", location=" + location +
                '}';
    }
}
