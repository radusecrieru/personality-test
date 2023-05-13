package com.teamway.personalitytest.entities;

import java.util.List;
import java.util.Map;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "QUESTIONS")
@Getter
@Setter
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Question_SEQ")
	@SequenceGenerator(name = "Question_SEQ")
	@Column(name = "ID", nullable = false)
	private Integer id;

	@Column(name = "TEXT", nullable = false)
	private String text;

	@ElementCollection
	@CollectionTable(name = "QUESTIONS_ANSWERS", joinColumns = @JoinColumn(name = "QUESTION_ID"), foreignKey = @ForeignKey(name = "QUESTIONS_ANSWERS_FK"))
	private List<Answer> answers;
}