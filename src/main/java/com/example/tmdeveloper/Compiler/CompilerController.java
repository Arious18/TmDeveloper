package com.example.tmdeveloper.Compiler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend to call API
public class CompilerController {

    private final CompilerService compilerService;

    public CompilerController(CompilerService compilerService) {
        this.compilerService = compilerService;
    }

    @PostMapping("/execute")
    public ResponseEntity<Map<String, Object>> executeCode(@RequestBody CodeRequest request) {
        try {
            // Validate the request
            if (request.getCode() == null || request.getCode().trim().isEmpty()) {
                throw new IllegalArgumentException("Code cannot be empty");
            }
            if (request.getLanguage() == null || request.getLanguage().trim().isEmpty()) {
                throw new IllegalArgumentException("Language cannot be empty");
            }

            // Execute the code with input
            Map<String, Object> result = compilerService.executeCode(
                    request.getCode(),
                    request.getLanguage(),
                    request.getInput() // Pass the input value
            );

            // Return success response
            return ResponseEntity.ok(Map.of(
                    "status", "success",
                    "output", result.getOrDefault("output", ""),
                    "error", result.getOrDefault("error", "")
            ));
        } catch (IllegalArgumentException e) {
            // Handle invalid input errors
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        } catch (Exception e) {
            // Handle unexpected errors
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occurred: " + e.getMessage());
        }
    }
}