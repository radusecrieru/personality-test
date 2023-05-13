package com.teamway.personalitytest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamway.personalitytest.entities.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
}