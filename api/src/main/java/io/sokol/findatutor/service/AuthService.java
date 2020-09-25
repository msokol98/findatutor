package io.sokol.findatutor.service;

import io.sokol.findatutor.pojo.AuthRequest;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    ResponseEntity<?> authenticate(AuthRequest request);
}
