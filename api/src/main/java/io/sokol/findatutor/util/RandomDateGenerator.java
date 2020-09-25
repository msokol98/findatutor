package io.sokol.findatutor.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;

public class RandomDateGenerator {

    public LocalDate run() {
        long minDay = LocalDate.of(2015, 1, 1).toEpochDay();
        long maxDay = LocalDate.of(2020, 8, 31).toEpochDay();
        long randomDay = ThreadLocalRandom.current().nextLong(minDay, maxDay);
        LocalDate randomDate = LocalDate.ofEpochDay(randomDay);
        return randomDate;
    }

}
