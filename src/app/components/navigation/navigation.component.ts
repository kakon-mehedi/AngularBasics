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

  ngOnInit() {
    this.authService.buttonText.subscribe((text) => {
      this.buttonText = text;
    });
  }
}
