package io.sokol.findatutor.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Tutor extends Person {

    @ManyToMany
    @JoinTable(name="TUTOR_SUBJECT",
            joinColumns=
                @JoinColumn(name="TUTOR_ID"),
            inverseJoinColumns=
                @JoinColumn(name="SUBJECT_ID")
    )
    private Set<Subject> subjects = new HashSet<>();

    @OneToMany(mappedBy = "tutor")
    private Set<Engagement> engagements = new HashSet<>();

    @OneToMany(mappedBy = "tutor")
    private Set<Review> reviews = new HashSet<>();

    public Tutor() {}

    public Tutor(String firstName, String lastName, String email, String userName,
                 String password, Location location, String profilePictureURI, LocalDate memberSince) {
        super(firstName, lastName, email, userName, password, location, profilePictureURI, memberSince);
    }

    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void addSubject(Subject s) {
        subjects.add(s);
    }
    public void removeSubject(Subject s) {
        subjects.remove(s);
    }

    public Set<Engagement> getEngagements() {
        return engagements;
    }

    private void addEngagement(Engagement e) {
        engagements.add(e);
    }
    private void removeEngagement(Engagement e) {
        engagements.remove(e);
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }

    public void addWrittenReview(Review r) { reviews.add(r); }
    public void removeWrittenReview(Review r) { reviews.remove(r); }
}
