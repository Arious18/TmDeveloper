package com.example.tmdeveloper.Api.Level;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LevelService {

    private final LevelRepo levelRepo;

    public LevelService(LevelRepo levelRepo) {
        this.levelRepo = levelRepo;
    }

    public List<LevelModel> getAllQuestions() {
        return levelRepo.findAll();
    }

    public LevelModel addQuestion(LevelModel question) {
        return levelRepo.save(question);
    }

    public String evaluateAnswer(UserAnswerRequest request) {
        Optional<LevelModel> optionalQuestion = levelRepo.findById(request.getId());

        if (optionalQuestion.isPresent()) {
            LevelModel question = optionalQuestion.get();

            return (question.getAnswer() == request.getUserAnswer()) ? "Correct!" : "Incorrect. Try again.";
        }
        return "Question not found.";
    }
    public LevelModel getRandomQuestion() {
        List<LevelModel> allQuestions = levelRepo.findAll();
        if (allQuestions.isEmpty()) {
            throw new RuntimeException("No questions available in the database.");
        }
        int randomIndex = (int) (Math.random() * allQuestions.size());
        return allQuestions.get(randomIndex); // Return a random question
    }

}
