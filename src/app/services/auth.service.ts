import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap } from 'rxjs';
import { AuthResponse } from '../appInterface/auth-response.interface';
import { User } from '../appModels/User.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private errorService: ErrorService,
    private router: Router
  ) {}

  firebaseAPIKey = 'AIzaSyBc2yCflCZ2fTHEfA0sEYpVJXg74jFNs88';
  signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseAPIKey}`;
  signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseAPIKey}`;

  user = new BehaviorSubject<User>(null!);
  buttonText = new BehaviorSubject('Log In'); //Default will be login page
  private tokenExpirationTimer: any;

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
    localStorage.setItem('user', JSON.stringify(newUser));
    this.autoSignOut(expiresIn * 1000);
  }

  autoSignIn() {
    const userInfo = JSON.parse(localStorage.getItem('user')!);

    if (!userInfo) return;

    const loggedInUser = new User(
      userInfo.email,
      userInfo.id,
      userInfo._token,
      new Date(userInfo._tokenExpirationDate)
    );

    if (loggedInUser.token) {
      this.user.next(loggedInUser);

      const expirationDuration =
        new Date(userInfo._tokenExpirationDate).getTime() -
        new Date().getTime();

      this.autoSignOut(expirationDuration);
    } else {
      console.log('Token is Expired');
    }
  }

  signOut() {
    this.user.next(null!);
    this.router.navigate(['auth']);
    localStorage.removeItem('user');

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoSignOut(expireDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signOut();
    }, expireDuration);
  }
}
