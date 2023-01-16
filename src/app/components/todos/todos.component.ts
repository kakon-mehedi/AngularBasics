import { Component } from '@angular/core';
import { Itodo } from 'src/app/models/Itodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodo();
    console.log('constructor run');
  }

  todos: Itodo[] = [];

  handleSubmitClick(formValue: Itodo) {
    console.log('add todo run');
    this.todoService.addTodo(formValue.task);
  }

  handleDeleteClick(currentIndex: number) {
    this.todoService.deleteTodo(currentIndex);
    this.todos = this.todoService.getTodo();
  }
}
