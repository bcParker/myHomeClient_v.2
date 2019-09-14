import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  public currWeather = [];
  public trueLocal = {'current_location': 'true'};
  public falseLocal = {'current_location': 'false'};
  public city: string = '';

  constructor(
    private weatherService: WeatherService,
  ) { }

  // ngOnInit() {
  //   return this.weatherService.getWeather(this.city).subscribe(data => this.currWeather = data);
  //   console.log(this.currWeather);
  // }

  tempRound(num): number{
    return Math.floor(((num - 273.15)*9/5+32));
  }

  getWeather(city){
    return this.weatherService.getWeather(this.city).subscribe(data => this.currWeather = data);
  }

  setLocation(){
    this.weatherService.setLocation(this.trueLocal).subscribe(
      res => {
        data => this.trueLocal = data;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  removeLocation() {
    this.weatherService.removeLocation(this.falseLocal).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
