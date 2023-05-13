import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityTestQuestionComponent } from './personality-test-question.component';

describe('PersonalityTestQuestionComponent', () => {
  let component: PersonalityTestQuestionComponent;
  let fixture: ComponentFixture<PersonalityTestQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalityTestQuestionComponent]
    });
    fixture = TestBed.createComponent(PersonalityTestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
