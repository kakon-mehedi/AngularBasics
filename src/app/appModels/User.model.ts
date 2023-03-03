export class User {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    const tokenIsExpired =
      !this._tokenExpirationDate || new Date() > this._tokenExpirationDate;
    if (tokenIsExpired) return null;
    return this._token;
  }
}
