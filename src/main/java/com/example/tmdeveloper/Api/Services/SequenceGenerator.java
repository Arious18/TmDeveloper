package com.example.tmdeveloper.Api.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

@Service
public class SequenceGenerator {


    @Autowired
    private MongoOperations mongo;


    public Long seqGenerator(String SeqNumber){
           DatabaseSequence counter=mongo.findAndModify(query(where("_id").is(SeqNumber)),
                   new Update().inc("seq",1),
                   options().returnNew(true).upsert(true),
                   DatabaseSequence.class);
    return counter!=null ? counter.getSeq():1;

    }

}
