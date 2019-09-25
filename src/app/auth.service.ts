import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIURL } from '../environments/environment.prod';
import { Users } from './users';


@Injectable({
 providedIn: 'root'
})
export class AuthService {
 private data: Users;
 private _createUrl = `${APIURL}/user/createuser`;
 private _loginUrl = `${APIURL}/user/signin`;
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
   })
 }
 public userstuff;
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
//   getUsers(): Observable<Users>{
//   return this.http.get<Users>(this.userUrl, this.httpOptions);
// }
updateUser(users: Users): Observable<any> {
 console.log(this.userstuff);
 let updateUrl: string = `${APIURL}/user/${this.userstuff.user.id}`;
 return this.http.put(updateUrl, users, this.httpOptions);
}
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { APIURL } from '../environments/environment.prod';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private _createUrl = `${APIURL}/user/createuser`;
//   private _loginUrl = `${APIURL}/user/signin`;

//   constructor(private http: HttpClient, private _router: Router) { }

//   createUser(user) {
//     console.log('user created');
//     return this.http.post<any>(this._createUrl, user)
//   }

//   loginUser(user) {
//     console.log('logged in');
//     return this.http.post<any>(this._loginUrl, user);
//   }

//   loggedIn() {
//     return !!localStorage.getItem('token');
//   }

//   logoutUser() {
//     localStorage.removeItem('token');
//     this._router.navigate(['login'])
//   }
// }

