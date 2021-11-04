import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Leon',
      country: 'Spain',
      date: new Date(),
      image: 'assets/img/sun.png',
      temperature: 2,
      description: 'clouddy'
    } as ICurrentWeather
  }

  ngOnInit(): void {
  }

}
