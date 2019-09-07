import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  public currWeather = [];

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    return this.weatherService.getWeather().subscribe(data => this.currWeather = data);
    console.log(this.currWeather);
  }

  tempRound(num): number{
    return Math.floor(((num - 273.15)*9/5+32));
  }

}
