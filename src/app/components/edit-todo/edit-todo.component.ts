import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css'],
})
export class EditTodoComponent {
  @Input() currentTodo: any;
  @Output() updatedTodo = new EventEmitter<any>();

  handleUpdateClick(updatedTodoInput: string) {
    let updatedTodo = {
      id: this.currentTodo.id,
      task: updatedTodoInput,
    };
    this.updatedTodo.emit(updatedTodo);
  }
}
