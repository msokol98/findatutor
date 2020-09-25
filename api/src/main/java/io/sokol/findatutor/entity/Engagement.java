package io.sokol.findatutor.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Engagement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Tutor tutor;

    @ManyToOne
    private Pupil pupil;

    @ManyToOne
    private Subject subject;

    @OneToMany(mappedBy = "engagement")
    private Set<Session> sessions = new HashSet<>();
}
