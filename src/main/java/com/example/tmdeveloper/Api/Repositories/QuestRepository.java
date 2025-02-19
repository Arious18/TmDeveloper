package com.example.tmdeveloper.Api.Repositories;

import com.example.tmdeveloper.Api.Models.QuestionModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestRepository extends MongoRepository<QuestionModel,Long> {
}
