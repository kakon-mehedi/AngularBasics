import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  isLoggedIn = true;

  handleLoginClick() {
    this.authService.login();
    this.authService.loginEvent.emit(true);
    this.isLoggedIn = true;
  }

  handleLogoutClick() {
    this.authService.logout();
    this.authService.loginEvent.emit(false);
    this.isLoggedIn = false;
  }
}
