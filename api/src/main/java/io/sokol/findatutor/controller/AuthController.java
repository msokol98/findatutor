package io.sokol.findatutor.controller;

import io.sokol.findatutor.pojo.AuthRequest;
import io.sokol.findatutor.pojo.AuthResponse;
import io.sokol.findatutor.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/authenticate")
    public ResponseEntity<?> auth(@RequestBody AuthRequest authRequest) throws Exception {
        return authService.authenticate(authRequest);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello, World";
    }

}