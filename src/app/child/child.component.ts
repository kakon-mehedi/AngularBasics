import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Output() inputQuery = new EventEmitter<any>();
  handleInputData(inputValue: string) {
    this.inputQuery.emit(inputValue);
  }
}
