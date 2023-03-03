import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/appInterface/auth-response.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  isLoginMode = true;
  isLoading = false;
  isRequestSuccessful = false;
  errorMessage: string = '';
  buttonText: string = '';

  authForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onModeChange() {
    this.isLoginMode = !this.isLoginMode;

    if (this.isLoginMode) {
      this.authService.buttonText.next('Log In');
    } else {
      this.authService.buttonText.next('Sign Up');
    }
  }

  onAuthFormSubmit() {
    if (this.authForm.invalid) return;

    this.isLoading = true;
    const authFormValue = this.authForm.value;
    const email = authFormValue.email;
    const password = authFormValue.password;
    let authObservable: Observable<AuthResponse>;

    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }

    authObservable.subscribe({
      next: (response) => {
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error;
        this.isLoading = false;
      },
      complete: () => {
        this.errorMessage = '';
        this.isRequestSuccessful = true;
        setTimeout(() => {
          this.isRequestSuccessful = false;
          this.authForm.reset();
        }, 3000);
      },
    });
  }

  ngOnInit() {
    this.authService.buttonText.subscribe((buttonText) => {
      this.buttonText = buttonText;
    });
  }
}
