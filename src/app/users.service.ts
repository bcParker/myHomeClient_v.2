import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './users.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = 'http://localhost:3000/user/2';
  updateUrl: string = 'http://localhost:3000/user/2';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Users> {
    return this.http.get<Users>(this.userUrl);
  }

  // updateUser(users: Users): Observable<any>{
  //   return this.http.put(this.userUrl, users, this.httpOptions);
  // }

  updateUser(users: Users): Observable<any> {
    return this.http.put(this.updateUrl, users, this.httpOptions);
  }
}
