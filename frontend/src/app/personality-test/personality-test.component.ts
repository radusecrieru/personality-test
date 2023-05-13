import {Component, inject, Input} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {QuestionService} from "../question.service";
import {Question} from "../question"
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {QuestionControlService} from "../question-control.service";

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss'],
  providers: [QuestionService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class PersonalityTestComponent {
  @Input() questions: Question[] = [];
  form: FormGroup = this.fb.group({});
  payLoad = '';
  isLoaded = false;
  result = "";

  constructor(private questionService: QuestionService, private qcs: QuestionControlService, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;
      this.form = this.qcs.toFormGroup(this.questions);
      this.isLoaded = true;
    });

  }

  onSubmit() {
    const personalitySigns = Object.values(this.form.getRawValue());
    const privateIntrovertedCount = personalitySigns.filter(sign => sign=="PRIVATE_INTROVERT").length;
    const privateExtrovertedCount = personalitySigns.filter(sign => sign=="PRIVATE_EXTROVERT").length;
    const publicIntrovertedCount = personalitySigns.filter(sign => sign=="PUBLIC_INTROVERT").length;
    const publicExtrovertedCount = personalitySigns.filter(sign => sign=="PUBLIC_EXTROVERT").length;

    let result = "You are a ";
    result += privateIntrovertedCount > privateExtrovertedCount ? "private introvert" : "private extrovert";
    result += " and a ";
    result += publicIntrovertedCount > publicExtrovertedCount ? "public introvert" : "public extrovert";

    this.result = result;
  }
}
