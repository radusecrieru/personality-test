import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Question} from "../question";

@Component({
  selector: 'app-personality-test-question',
  templateUrl: './personality-test-question.component.html',
  styleUrls: ['./personality-test-question.component.scss']
})
export class PersonalityTestQuestionComponent {
  @Input() question!: Question;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.id].valid; }
}
