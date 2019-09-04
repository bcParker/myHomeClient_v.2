import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = 'http://localhost:3000/user/10';

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.userUrl);
  }
}
