package com.example.tmdeveloper.Api.Services;

import org.springframework.data.annotation.Id;

public class DatabaseSequence {

    @Id
    private String id;
    private long seq;

    public void setId(String id) {
        this.id = id;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }

    public String getId() {
        return id;
    }

    public long getSeq() {
        return seq;
    }
    @Override
    public String toString() {
        return "DatabaseSequence{" +
                "id='" + id + '\'' +
                ", seq=" + seq +
                '}';
    }

}
