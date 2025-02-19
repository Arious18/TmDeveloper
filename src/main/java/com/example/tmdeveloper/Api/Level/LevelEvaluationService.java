package com.example.tmdeveloper.Api.Level;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LevelEvaluationService {

    private final LevelRepo levelRepo;

    public LevelEvaluationService(LevelRepo levelRepo) {
        this.levelRepo = levelRepo;
    }

    public String evaluateUserLevel(List<UserResponse> responses) {
        int score = 0;

        for (UserResponse response : responses) {
            Optional<LevelModel> optionalQuestion = levelRepo.findById(response.getQuestionId());

            if (optionalQuestion.isPresent()) {
                LevelModel question = optionalQuestion.get();

                // ✅ Ensure answer comparison is done correctly
                if (question.getAnswer() == response.getUserAnswer()) {
                    score += switch (question.getDifficulty()) {
                        case 1 -> 5;
                        case 2 -> 10;
                        default -> 15;
                    };
                }
            }
        }

        if (score <= 30) {
            return "Beginner";
        } else if (score <= 70) {
            return "Intermediate";
        } else {
            return "Advanced";
        }
    }
}
