package com.example.tmdeveloper.Compiler;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class CompilerService {

    private static final Logger logger = LoggerFactory.getLogger(CompilerService.class);
    private final String PISTON_URL = "https://emkc.org/api/v2/piston/execute";

    public Map<String, Object> executeCode(String code, String language, String input) {
        // Validate input
        if (code == null || code.trim().isEmpty()) {
            throw new IllegalArgumentException("Code cannot be empty");
        }
        if (language == null || language.trim().isEmpty()) {
            throw new IllegalArgumentException("Language cannot be empty");
        }

        RestTemplate restTemplate = new RestTemplate();

        // Create request body
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("language", language);

        // Set the correct version based on the language
        String version = getLanguageVersion(language);
        requestBody.put("version", version);

        // Add code and input
        requestBody.put("files", Collections.singletonList(Map.of("content", code)));

        // Ensure input is not null (default to empty string)
        requestBody.put("stdin", input == null ? "" : input);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(org.springframework.http.MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            // Call Piston API
            ResponseEntity<Map> response = restTemplate.exchange(
                    PISTON_URL,
                    HttpMethod.POST,
                    entity,
                    Map.class
            );

            // Log the response from Piston
            logger.info("Piston Response: {}", response.getBody());

            // Parse and return the response
            return parseResponse(response.getBody());
        } catch (Exception e) {
            // Log the exception
            logger.error("Error calling Piston API: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to execute code: " + e.getMessage(), e);
        }
    }

    private String getLanguageVersion(String language) {
        switch (language.toLowerCase()) {
            case "cpp":
                return "10.2.0"; // Use the correct version for C++
            case "python":
                return "3.9.7"; // Use the correct version for Python
            case "javascript":
                return "16.13.0"; // Use the correct version for JavaScript
            default:
                throw new IllegalArgumentException("Unsupported language: " + language);
        }
    }

    private Map<String, Object> parseResponse(Map<String, Object> responseBody) {
        Map<String, Object> result = new HashMap<>();
        if (responseBody != null) {
            Map<String, Object> runDetails = (Map<String, Object>) responseBody.get("run");
            if (runDetails != null) {
                result.put("output", runDetails.getOrDefault("output", ""));
                result.put("error", runDetails.getOrDefault("stderr", ""));
            } else {
                result.put("error", "Execution failed: No run details available.");
            }
        } else {
            result.put("error", "Execution failed: Empty response from API.");
        }
        return result;
    }
}