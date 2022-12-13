import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todos = [{ id: 0, todo: 'kakon' }];
  editClicked = false;
  currentTodo: any[] = [];
  currentTodoData: any = {};

  addTodo(newTodo: any) {
    this.todos.push({ id: this.todos.length, todo: newTodo });
  }

  editTodo(id: any) {
    this.editClicked = true;
    this.currentTodo = this.todos.filter((todo) => todo.id === id);
    this.currentTodoData = this.currentTodo[0];
    console.log(this.currentTodoData);
  }

  updateTodo(id: any, updatedTodo: any) {
    this.editClicked = false;
    this.currentTodo[0].todo = updatedTodo;
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
