import { Component } from '@angular/core';
('@angular/from');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  handleSubmit(data: any) {
    console.dir(data);
  }
}
