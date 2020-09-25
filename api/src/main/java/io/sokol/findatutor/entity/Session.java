package io.sokol.findatutor.entity;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    private Engagement engagement;

    private LocalDateTime time;
}
