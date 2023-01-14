import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    let oldData = localStorage.getItem('todosData');
    if (oldData) {
      this.savedTodos = JSON.parse(oldData);
    } else {
      this.savedTodos.push(...this.defaultTodos);
    }
  }

  defaultTodos = [
    {
      id: 1,
      task: 'Task 1',
    },
    {
      id: 2,
      task: 'Task 2',
    },
  ];

  savedTodos: any = [];

  addTodo(todo: string) {
    if (todo) {
      let newTodo = {
        id: this.savedTodos.length + 1,
        task: todo,
      };

      this.savedTodos.push(newTodo);
    }

    localStorage.setItem('todosData', JSON.stringify(this.savedTodos));
  }
}
