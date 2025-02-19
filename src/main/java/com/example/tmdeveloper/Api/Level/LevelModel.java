package com.example.tmdeveloper.Api.Level;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserLevelQuestions")
public class LevelModel {

    @Id
    private String id;
    private String question;
    private String[] options;
    private int choice;
    private int difficulty;
    private int answer;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public String[] getOptions() { return options; }
    public void setOptions(String[] options) { this.options = options; }

    public int getChoice() { return choice; }
    public void setChoice(int choice) { this.choice = choice; }

    public int getDifficulty() { return difficulty; }
    public void setDifficulty(int difficulty) { this.difficulty = difficulty; }

    public int getAnswer() { return answer; }
    public void setAnswer(int answer) { this.answer = answer; }
}
