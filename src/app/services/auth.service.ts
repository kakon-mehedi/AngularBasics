import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  firebaseAPIKey = 'AIzaSyBc2yCflCZ2fTHEfA0sEYpVJXg74jFNs88';

  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`;

  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`;

  signUp(email: string, password: string) {
    const signUpInfo = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponse>(this.signupUrl, signUpInfo).pipe(
      catchError((err) => {
        return this.errorService.handleError(err);
      })
    );
  }

  signIn(email: string, password: string) {
    const signInInfo = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponse>(this.signInUrl, signInInfo).pipe(
      catchError((err) => {
        return this.errorService.handleError(err);
      })
    );
  }
}
