import { Injectable } from '@angular/core';
import { Itodo } from '../models/Itodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  todos: Itodo[] = [
    {
      id: 1,
      task: 'Go Home',
    },

    {
      id: 2,
      task: 'Call Mom',
    },
  ];

  getTodo() {
    console.log('service get todo run');
    return this.todos;
  }

  addTodo(todoInput: string) {
    let todoItem = {
      id: this.todos.length + 1,
      task: todoInput,
    };
    this.todos.push(todoItem);
  }

  deleteTodo(currentIndex: number) {
    let currentTodo = this.findCurrentTodo(currentIndex);
    this.todos = this.todos.filter((todo) => {
      return todo.id != currentTodo.id;
    });
  }

  findCurrentTodo(currentID: number) {
    return this.todos[currentID];
  }
}
