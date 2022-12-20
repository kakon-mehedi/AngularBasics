import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn = false;

  ngOnInit() {
    this.authService.loginEvent.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }
}
