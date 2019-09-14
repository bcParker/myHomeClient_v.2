import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// interface LoginData {
//   message: string;
//   sessionToken: string;
//   user: string;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _createUrl = 'http://localhost:3000/user/createuser';
  private _loginUrl = 'http://localhost:3000/user/signin';

  constructor(private http: HttpClient, private _router: Router) { }

  createUser(user) {
    console.log('user created');
    return this.http.post<any>(this._createUrl, user)
  }

  loginUser(user) {
    console.log('logged in');
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['login'])
  }
}
