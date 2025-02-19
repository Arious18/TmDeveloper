package com.example.tmdeveloper.Api.Level;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/level")
public class LevelController {

    private final LevelService levelService;

    public LevelController(LevelService levelService) {
        this.levelService = levelService;
    }

    @GetMapping("/questions")
    public List<LevelModel> getAllQuestions() {
        return levelService.getAllQuestions();
    }
    @GetMapping("/random-question")
    public LevelModel getRandomQuestion() {
        return levelService.getRandomQuestion();
    }

    @PostMapping("/add")
    public LevelModel addQuestion(@RequestBody LevelModel question) {
        return levelService.addQuestion(question);
    }
}
