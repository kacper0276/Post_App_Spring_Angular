package kacperrenkel.postapp.backend.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import kacperrenkel.postapp.backend.user.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

@Service
public class JwtService {
    public final String SECRET;
    private final SecretKey secretKey;


    public JwtService(@Value("${security.jwt.secret-key}") String secretKey) {
        SECRET = secretKey;
        byte[] decodedKey = Decoders.BASE64.decode(secretKey);
        this.secretKey = new SecretKeySpec(decodedKey, "HmacSHA256");
    }


    public String generateToken(User user, int expirationTime) {
        return Jwts.builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(secretKey)
                .compact();
    }

    public String extractUsername(String token) {
        return extractClaims(token, Claims::getSubject);
    }

    private <T> T extractClaims(String token, Function<Claims, T> claimsTFunction) {
        return claimsTFunction.apply(Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token).getPayload());
    }

    public void validateToken(final String token) throws IllegalArgumentException {
        Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token);
    }

    public boolean isTokenExpired(String token) {
        return extractClaims(token, Claims::getExpiration).before(new Date());
    }

}