import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css'],
})
export class AddNewTodoComponent {
  constructor(private apiService: ApiService) {}

  isLoading = false;

  onAddTodo(todo: string) {
    this.isLoading = true;
    this.apiService.addTodo(todo).subscribe({
      next: (todo) => {
        // console.log('Added');
        this.apiService.getTodos();
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
