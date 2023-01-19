import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn: any = false;

  handleLoginClick() {
    this.authService.login();
    this.authService.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }

  handleLogoutClick() {
    this.authService.logout();
    this.authService.isLoggedIn.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }
}
