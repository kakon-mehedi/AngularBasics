import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent {
  constructor(private dataService: DataService) {}
  todos: any = this.dataService.savedTodos;
  showClicked = false;
  editClicked = false;
  visited = false;
  currentTodo = {};

  handleButtonClick(e: any) {
    if (e === 'SHOW') {
      this.showClicked = true;
      this.editClicked = false;
    } else if (e === 'EDIT') {
      this.showClicked = false;
      this.editClicked = true;
    } else {
      this.editClicked = false;
      this.showClicked = false;
    }
  }

  handleCurrentTodo(e: any) {
    this.currentTodo = e;
  }
  handleUpdateTodo(e: any) {
    this.todos = this.todos.filter((todo: any) => {
      if (todo.id == e.id) {
        return (todo.task = e.task);
      } else return todo;
    });

    localStorage.setItem('todosData', JSON.stringify(this.todos));

    this.editClicked = false;
    this.showClicked = false;
  }

  handleHideClick(e: any) {
    let buttonIsClicked = this.editClicked || this.showClicked;

    if (buttonIsClicked && this.visited) {
      e.classList.add('show-none');
      this.visited = false;
    } else if (buttonIsClicked && !this.visited) {
      e.classList.remove('show-none');
      this.visited = true;
      buttonIsClicked = false;
    } else {
      e.classList.add('show-none');
    }
  }
}
