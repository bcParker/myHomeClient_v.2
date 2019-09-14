import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Users } from './users';
import { APIURL } from '../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userUrl: string = `${APIURL}/user/10`;

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(this.userUrl);
  }
}
