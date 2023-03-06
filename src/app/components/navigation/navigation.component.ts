import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(private authService: AuthService) {}
  buttonText: string = '';
  isLoggedIn = false;

  ngOnInit() {
    this.authService.buttonText.subscribe((text) => {
      this.buttonText = text;
    });

    this.authService.user.subscribe({
      next: (user) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
    });
  }

  onLogOut() {
    this.authService.signOut();
  }
}
