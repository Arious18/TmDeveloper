package com.example.tmdeveloper.Api.Controllers;

import com.example.tmdeveloper.Api.Models.QuestionModel;
import com.example.tmdeveloper.Api.Repositories.QuestRepository;
import com.example.tmdeveloper.Api.Services.SequenceGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class QuestionController {

    @Autowired
    private SequenceGenerator sequenceGenerator;

    @Autowired
    private QuestRepository questionRepository;

    @PostMapping("/create")
    public List<QuestionModel> createQuestions(@RequestBody List<QuestionModel> newQuestions) {
        for (QuestionModel question : newQuestions) {
            question.setId(sequenceGenerator.seqGenerator(QuestionModel.SEQUENCE_NAME));
        }
        return questionRepository.saveAll(newQuestions);
    }


    @GetMapping("/get")
    public List<QuestionModel> getQuestions() {
        return questionRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public QuestionModel getQuestionById(@PathVariable Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    @GetMapping("/random")
    public QuestionModel getRandomQuestion() {
        List<QuestionModel> questions = questionRepository.findAll();
        if (questions.isEmpty()) {
            throw new RuntimeException("No questions available");
        }
        Random random = new Random();
        return questions.get(random.nextInt(questions.size()));
    }

    @PutMapping("/update/{id}")
    public QuestionModel updateQuestion(@PathVariable Long id, @RequestBody QuestionModel updatedModel) {
        if (!questionRepository.existsById(id)) {
            throw new RuntimeException("Question not found");
        }
        updatedModel.setId(id);
        return questionRepository.save(updatedModel);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteQuestion(@PathVariable Long id) {
        if (questionRepository.existsById(id)) {
            questionRepository.deleteById(id);
            return "Deleted question with id = " + id;
        } else {
            throw new RuntimeException("Question not found");
        }
    }
}
