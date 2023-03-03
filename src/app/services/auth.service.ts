import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap } from 'rxjs';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { User } from '../appModels/User.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  firebaseAPIKey = 'AIzaSyBc2yCflCZ2fTHEfA0sEYpVJXg74jFNs88';
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`;
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`;

  user = new Subject();
  buttonText = new BehaviorSubject('Log In'); //Default will be login page

  signUp(email: string, password: string) {
    const signUpInfo = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponse>(this.signupUrl, signUpInfo).pipe(
      catchError((err) => {
        return this.errorService.handleError(err);
      }),
      tap((res) => {
        this.authenticatedUser(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        );
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
      }),
      tap((res) => {
        this.authenticatedUser(
          res.email,
          res.localId,
          res.idToken,
          +res.expiresIn
        );
      })
    );
  }

  authenticatedUser(
    email: string,
    id: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new User(email, id, token, expirationDate);
    this.user.next(newUser);
  }
}
