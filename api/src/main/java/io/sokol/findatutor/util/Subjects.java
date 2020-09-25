package io.sokol.findatutor.util;

import io.sokol.findatutor.entity.Subject;

import java.util.Arrays;
import java.util.List;

public interface Subjects {
   List<Subject> data = Arrays.asList(
            new Subject("Mathematics"),
            new Subject("Physics"),
            new Subject("Programming"),
            new Subject("Spanish"),
            new Subject("Latin")
   );
}
