import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  constructor(private fb: FormBuilder) {}
  addQuestionForm: FormGroup = this.fb.group({
    question: ['', Validators.required],
    image: ['', Validators.required],
    options: this.fb.array([
      this.fb.group({
        option: ['', [Validators.required]],
        isAnswer: ['', []],
      }),

      this.fb.group({
        option: ['', [Validators.required]],
        isAnswer: ['', []],
      }),

      this.fb.group({
        option: ['', [Validators.required]],
        isAnswer: ['', []],
      }),

      this.fb.group({
        option: ['', [Validators.required]],
        isAnswer: ['', []],
      }),
    ]),
    subject: ['', Validators.required],
    chapter: ['', Validators.required],
    source: ['', Validators.required],
  });

  get optionsArray() {
    return this.addQuestionForm.get('options') as FormArray;
  }

  onAddNew() {
    const newQuestion = this.fb.group({
      option: ['', [Validators.required]],
      isAnswer: ['', []],
    });

    this.optionsArray.push(newQuestion);
  }

  onAddQuestionSubmit() {
    console.log(this.addQuestionForm.value);
  }
}
