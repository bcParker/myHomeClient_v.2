import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentWeather } from './currentWeather.model';
import { APIURL } from '../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  sessionToken: string = localStorage.getItem('token');

  private cWeatherURL: string = `http://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=f57468123507e0434fa3838390f4f1af`;

  private currentLocation: string = `${APIURL}/weather/setLocation`;

  private addCity: string = `${APIURL}/weather/add`;

 

  constructor(
    private http: HttpClient,
  ) { }

  getWeather(x): Observable<CurrentWeather>{
    const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${x}&appid=f57468123507e0434fa3838390f4f1af`;

    return this.http.get<CurrentWeather>(weatherURL)
  }

  setLocation(curLocal) {
    // const body = {

    // }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    }
    console.log(httpOptions);
    return this.http.put<string>(this.currentLocation, curLocal, httpOptions);
  }

  removeLocation(curLocal) {
    return this.http.put<string>(this.currentLocation, curLocal)
  }

  saveCity(city){
    const body = {
      city: city
    }
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    });
    return(
      this.http.post<string>(this.addCity, body, {headers: reqHeaders})
    ) 
  }
}
