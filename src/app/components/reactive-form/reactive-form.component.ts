import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  kakonForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    age: ['', [Validators.required]],
    address: this.fb.group({
      thana: [],
      district: [],
    }),
    hobbies: this.fb.array([]),
    skills: this.fb.array([
      this.fb.group({
        title: [],
        level: [],
      }),
    ]),
  });

  get skillsArray() {
    return this.kakonForm.get('skills') as FormArray;
  }

  get hobbiesArray() {
    return this.kakonForm.get('hobbies') as FormArray;
  }

  onAddNewHobby() {
    const newHobby = this.fb.control([]);
    this.hobbiesArray.push(newHobby);
  }

  onAddNewSkill() {
    const newSkill = this.fb.group({
      title: [],
      level: [],
    });

    this.skillsArray.push(newSkill);
  }

  onDeleteSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  onSubmit() {
    console.log(this.kakonForm.value);
  }

  ngOnInit() {}
}
