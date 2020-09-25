package io.sokol.findatutor.repository;

import io.sokol.findatutor.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {
    
    @Query(nativeQuery = true, value = "SELECT * from location\n" +
                                        "ORDER BY random()\n" +
                                        "LIMIT 1;\n")
    Location getRandomLocation();
}
