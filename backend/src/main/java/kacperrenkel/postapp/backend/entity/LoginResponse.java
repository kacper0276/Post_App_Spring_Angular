package kacperrenkel.postapp.backend.entity;

import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Getter
@Setter
public class LoginResponse {
    private final String timestamp;
    private final boolean message;

    public LoginResponse(boolean message){
        this.timestamp = String.valueOf(new Timestamp(System.currentTimeMillis()));
        this.message = message;
    }
}