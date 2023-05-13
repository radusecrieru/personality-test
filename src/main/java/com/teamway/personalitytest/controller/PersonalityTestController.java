package com.teamway.personalitytest.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.teamway.personalitytest.entities.Question;
import com.teamway.personalitytest.repository.QuestionRepository;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class PersonalityTestController {
	private final QuestionRepository questionRepository;

	public PersonalityTestController(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {

		return String.format("Hello %s!", name);
	}

	@GetMapping("/questions")
	public List<Question> getQuestions() {
		return questionRepository.findAll();
	}
}
