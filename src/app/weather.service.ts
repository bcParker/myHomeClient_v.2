import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './currentWeather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cWeatherURL: string = `http://api.openweathermap.org/data/2.5/weather?q=indianapolis&appid=f57468123507e0434fa3838390f4f1af`;

  constructor(
    private http: HttpClient,
  ) { }

  getWeather(): Observable<CurrentWeather[]>{
    return this.http.get<CurrentWeather[]>(this.cWeatherURL)
  }
}
