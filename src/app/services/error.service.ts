import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}

  errorMessages: Object = {
    EMAIL_EXISTS: 'The email address is already in use by another account',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER:
      'We have blocked all requests from this device due to unusual activity. Try again later.',
    EMAIL_NOT_FOUND:
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    INVALID_PASSWORD:
      'The password is invalid or the user does not have a password.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
    OKEN_EXPIRED:
      "The user's credential is no longer valid. The user must sign in again.",
    USER_NOT_FOUND:
      'The user corresponding to the refresh token was not found. It is likely the user was deleted.',
    INVALID_GRANT_TYPE: 'the grant type specified is invalid.',
    MISSING_REFRESH_TOKEN: ' no refresh token provided.',
    INVALID_IDP_RESPONSE:
      'The supplied auth credential is malformed or has expired',
    INVALID_EMAIL: 'The email address is badly formatted.',
    INVALID_ID_TOKEN:
      "The user's credential is no longer valid. The user must sign in again.",
  };

  handleError(err: HttpErrorResponse) {
    if (!err.error || !err.error.error) {
      return throwError(
        () => 'UNKNOWN Error or Your Internet connection is lost!'
      );
    } else {
      const currentErrorMsg = err.error.error.message;
      const userFriendlyError =
        this.errorMessages[currentErrorMsg as keyof Object];
      return throwError(() => userFriendlyError);
    }
  }
}
