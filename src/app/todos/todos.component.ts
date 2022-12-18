import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos = [{ id: 1, todo: 'Todo 1' }];

  handleFormSumit(data: any) {
    console.log(data);
  }

  handleInputQuery(e: any) {
    console.log(e);
  }
}
