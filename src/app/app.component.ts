import { Component } from '@angular/core';
import { AuthService } from './appServices/auth.service';
import { LoadingService } from './appServices/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: any = false;
  isLoading: any = false;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService
  ) {}

  onSignOut() {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe({
      next: (status) => {
        this.isLoggedIn = status;
      },
    });

    this.loadingService.isLoading.subscribe((status: any) => {
      this.isLoading = status;
    });

    this.authService.autoSignIn();
  }
}
