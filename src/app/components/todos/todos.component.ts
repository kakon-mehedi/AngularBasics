import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor(private apiService: ApiService) {
    this.apiService.getTodos();
  }

  savedTodos = [];

  ngOnInit() {
    this.apiService.savedTodos.subscribe({
      next: (todosFromServer: any) => {
        this.savedTodos = todosFromServer;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
