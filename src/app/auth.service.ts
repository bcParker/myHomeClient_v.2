import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signinUrl = 'http://localhost:3000/user/createuser';
  private _loginUrl = 'http://localhost:3000/user/signin';

  constructor(private http: HttpClient) { }

  signInUser(user) {
    return this.http.post<any>(this._signinUrl, user)
  }

  loginUser(user) {
    console.log('logged in');
    return this.http.post<any>(this._loginUrl, user)
  }
}
