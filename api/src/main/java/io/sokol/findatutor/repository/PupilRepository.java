package io.sokol.findatutor.repository;

import io.sokol.findatutor.entity.Pupil;
import io.sokol.findatutor.entity.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PupilRepository extends JpaRepository<Tutor, Long> {

}
