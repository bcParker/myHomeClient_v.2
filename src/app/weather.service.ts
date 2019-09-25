import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentWeather } from './currentWeather.model';
import { CurrentCity } from './currentCity';
import { APIURL } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  sessionToken: string = localStorage.getItem('token');

  constructor(
    private http: HttpClient,
  ) { }

  getWeather(x): Observable<CurrentWeather>{
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=f57468123507e0434fa3838390f4f1af`;

    return this.http.get<CurrentWeather>(weatherURL)
  }

  displayWeather(){
    const databaseURL = `${APIURL}/weather/display`;
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
    return this.http.get<CurrentCity>(databaseURL, {headers: reqHeaders})
  }
 
  saveCity(city){
    const addCity: string = `${APIURL}/weather/update`;
    const body = {
      city: city
    }
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return(
      this.http.post<string>(addCity, body, {headers: reqHeaders})
    ) 
  }

  deleteCity(){
    const deleteCity: string = `${APIURL}/weather/delete`;
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return(
      this.http.delete<string>(deleteCity, {headers: reqHeaders})
    )
  }
}
