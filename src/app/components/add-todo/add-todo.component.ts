import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  constructor(private dataService: DataService) {}

  handleAddTodo(input: string) {
    this.dataService.addTodo(input);
  }
}
