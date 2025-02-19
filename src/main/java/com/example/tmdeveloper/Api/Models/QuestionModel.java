package com.example.tmdeveloper.Api.Models;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "MyCollection")
public class QuestionModel {
    public static final String SEQUENCE_NAME = "Id_sequence";
    @Id
    private Long id;
    private String question;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @Override
    public String toString() {
        return "QuestionModel{" +
                "id=" + id +
                ", question='" + question + '\'' +
                '}';
    }
}
