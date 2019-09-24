import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './users';
import { APIURL } from '../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = `${APIURL}/user/1`;
  updateUrl: string = `${APIURL}/user1`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': localhost.getItem('token')
    })
  }

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Users>{
    return this.http.get<Users>(this.userUrl);
  }

  updateUser(users: Users): Observable<any> {
    return this.http.put(this.updateUrl, users, this.httpOptions)
  }
}
