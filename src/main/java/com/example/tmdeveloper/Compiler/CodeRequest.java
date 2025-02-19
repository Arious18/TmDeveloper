package com.example.tmdeveloper.Compiler;

import jakarta.validation.constraints.NotBlank;

public class CodeRequest {
    @NotBlank(message = "Code cannot be empty")
    private String code;

    @NotBlank(message = "Language cannot be empty")
    private String language;

    private String input; // Optional input for interactive programs

    // Getters and Setters
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getInput() {
        return input;
    }

    public void setInput(String input) {
        this.input = input;
    }
}