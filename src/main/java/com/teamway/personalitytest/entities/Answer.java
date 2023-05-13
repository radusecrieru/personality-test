package com.teamway.personalitytest.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class Answer {
	public enum PersonalitySign {
		PRIVATE_INTROVERTED, PRIVATE_EXTROVERTED,
		PUBLIC_INTROVERTED, PUBLIC_EXTROVERTED;
	}

	private String text;

	@Enumerated(EnumType.STRING)
	private PersonalitySign personalitySign;
}