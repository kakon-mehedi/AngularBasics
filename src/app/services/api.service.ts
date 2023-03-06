import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  API_URL =
    'https://angularfirebaseauth-6e704-default-rtdb.firebaseio.com/todos.json';

  savedTodos = new Subject();

  addTodo(newTodo: string) {
    const todo = {
      todo: newTodo,
    };
    return this.http.post(this.API_URL, todo);
  }

  getTodos() {
    this.http
      .get(this.API_URL)
      .pipe(
        map((data: any) => {
          const todosArr = [];
          for (const key in data) {
            todosArr.push({ id: key, ...data[key] });
          }
          return todosArr;
        })
      )
      .subscribe({
        next: (todos) => {
          this.savedTodos.next(todos);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
