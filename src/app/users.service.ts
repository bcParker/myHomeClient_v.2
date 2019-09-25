import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './users';
import { APIURL } from '../environments/environment.prod';
import { LoginComponent } from './login/login.component';
@Injectable({
 providedIn: 'root'
})
export class UsersService {
 userdata: Users = {email: '', password: '', name: '', avatar: '', id: 1};
 sessionToken: string = localStorage.getItem('token');
 private userUrl: string = `${APIURL}/user/${this.userdata.email}`;
 private updateUrl: string = `${APIURL}/user/${this.userdata.email}`;
 httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': this.sessionToken,
   })
 }
 constructor(
   private http: HttpClient,
 ) { }
 getUsers(): Observable<Users>{
   return this.http.get<Users>(this.userUrl, this.httpOptions);
 }
 updateUser(users: Users): Observable<any> {
   return this.http.put(this.updateUrl, users, this.httpOptions);
 }
}