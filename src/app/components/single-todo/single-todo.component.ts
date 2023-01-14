import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
})
export class SingleTodoComponent {
  @Input() todo: any;
  @Input() rightSide: any;
  @Output() buttonIsClicked = new EventEmitter<any>();
  @Output() currentTodo = new EventEmitter<any>();

  handleShowClick() {
    this.buttonIsClicked.emit('SHOW');
    this.currentTodo.emit(this.todo);
    this.rightSide.classList.remove('show-none');
  }
  handleEditClick() {
    this.buttonIsClicked.emit('EDIT');
    this.currentTodo.emit(this.todo);
  }
}
