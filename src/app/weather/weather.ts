import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-weather',
  imports: [],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather {
[x: string]: any;
  forecasts: WeatherData[] = [];

  constructor(http: HttpClient) {
    http.get<WeatherData[]>('http://localhost:5156/weatherforecast').subscribe(result => {
      this.forecasts = result;
    });
  }
}
