package io.sokol.findatutor.projection;

import io.sokol.findatutor.entity.Person;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Projection(
        name = "1",
        types = { Person.class }
)
public interface PersonProjection {

    long getId();

    @Value("#{target.getFirstName() + \" \" + target.getLastName()}")
    String getName();

    String getEmail();

    String getProfilePictureURI();

    @Value("#{target.getClass().toString().substring(33)}")
    String getRole();

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    LocalDate getMemberSince();

    boolean isWelcomeCompletecomeComplete();
}
