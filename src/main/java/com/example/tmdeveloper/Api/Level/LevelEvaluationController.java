package com.example.tmdeveloper.Api.Level;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evaluate")
public class LevelEvaluationController {

    private final LevelEvaluationService evaluationService;

    public LevelEvaluationController(LevelEvaluationService evaluationService) {
        this.evaluationService = evaluationService;
    }

    @PostMapping("/analyze")
    public String analyzeUserLevel(@RequestBody List<UserResponse> responses) {
        return evaluationService.evaluateUserLevel(responses);
    }
}
