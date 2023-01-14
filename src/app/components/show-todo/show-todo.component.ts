import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.css'],
})
export class ShowTodoComponent {
  @Input() currentTodo: any;
}
