import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../currentWeather.model';
import { CurrentCity } from '../currentCity';
// import { Weather } from './weather';
// import { WeatherMain } from './weatherMain';
// import { Wind } from './wind';
// import { Name } from './name';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  public currWeather: CurrentWeather
  // public trueLocal = {'current_location': 'true'};
  // public falseLocal = {'current_location': 'false'};
  public city: string = '';
  public savedCity: SavedCity;
  public currentCity: CurrentCity;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.weatherService.displayWeather(this.currentCity).subscribe(res => {
      data => this.currWeather = data;
      localStorage.getItem('token')
    }) 
    this.weatherService.getWeather(this.city).subscribe(data => this.currWeather = data);
  }

  tempRound(num): number{
    return Math.floor(((num - 273.15)*9/5+32));
  }

  getWeather(){
    return this.weatherService.getWeather(this.city).subscribe(data => this.currWeather = data);
  }

  saveCity(){
    this.weatherService.saveCity(this.currWeather).subscribe(
      res => {
        data => this.savedCity = data;
        localStorage.getItem('token')
        console.log(res)
      },
      err => console.log(err)
    )
  }

  deleteCity(){
    this.weatherService.deleteCity().subscribe(
      res => {
        data => this.deleteCity = data;
        localStorage.getItem('token')
      },
      err => console.log(err)
    )
  }

  // setLocation(){
  //   this.weatherService.setLocation(this.trueLocal).subscribe(
  //     res => {
  //       data => this.trueLocal = data;
  //       console.log(res)
  //     },
  //     err => console.log(err)
  //   )
  // }

  // removeLocation() {
  //   this.weatherService.removeLocation(this.falseLocal).subscribe(
  //     res => console.log(res),
  //     err => console.log(err)
  //   )
  // }
}

interface SavedCity {
  city: string;
  current_location: boolean;
}
