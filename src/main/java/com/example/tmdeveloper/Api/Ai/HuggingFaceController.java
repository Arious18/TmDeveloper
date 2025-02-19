package com.example.tmdeveloper.Api.Ai;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import reactor.core.publisher.Flux;
import java.time.Duration;
import java.util.Collections;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class HuggingFaceController {

    private final String API_URL = "https://api-inference.huggingface.co/models/openai-community/gpt2";
    private final String API_KEY = "Bearer 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"; // API anahtarını değiştir

    @PostMapping(value = "/chat", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> chatWithAI(@RequestBody Map<String, String> request) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", API_KEY);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, String>> entity = new HttpEntity<>(request, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(API_URL, HttpMethod.POST, entity, String.class);
            String responseBody = response.getBody();

            if (responseBody != null) {
                return Flux.just(responseBody); // Tüm cevabı tek parça gönder
            } else {
                return Flux.just("Yanıt alınamadı.");
            }
        } catch (Exception e) {
            return Flux.just("API hatası oluştu: " + e.getMessage());
        }
    }
}
