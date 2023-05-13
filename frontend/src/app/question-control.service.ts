import { Injectable } from '@angular/core';
import {Question} from "./question";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  toFormGroup(questions: Question[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.id] = new FormControl(question.text, Validators.required);
    });
    return new FormGroup(group);
  }
}
