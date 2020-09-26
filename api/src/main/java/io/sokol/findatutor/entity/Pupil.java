package io.sokol.findatutor.entity;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Pupil extends Person {

    public Pupil() {}

    public Pupil(String firstName, String lastName, String email,
                 String password, Location location, String profilePictureURI, LocalDate memberSince) {
        super(firstName, lastName, email, password, location, profilePictureURI, memberSince);
    }

    @OneToMany(mappedBy = "pupil")
    private Set<Engagement> engagements = new HashSet<>();

    public Set<Engagement> getEngagements() {
        return engagements;
    }

    @OneToMany(mappedBy = "pupil")
    public Set<Review> writtenReviews = new HashSet<>();

    private void addEngagement(Engagement e) {
        engagements.add(e);
    }
    private void removeEngagement(Engagement e) {
        engagements.remove(e);
    }

    public Set<Review> getWrittenReviews() {
        return writtenReviews;
    }
    public void addWrittenReview(Review r) { writtenReviews.add(r); }
    public void removeWrittenReview(Review r) { writtenReviews.remove(r); }

}
