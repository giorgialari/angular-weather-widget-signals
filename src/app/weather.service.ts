import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { WeatherData } from '../mock';
import { CitiesResponse, CityWeather, HourlyForecast } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherData: CitiesResponse = WeatherData;
  constructor() {}

  getWeathers() {
    return toSignal(of(this.weatherData), { initialValue: { cities: [] } });
  }

  getNextFiveHoursForecast(cityWeather: CityWeather): HourlyForecast[] {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const nextFiveHoursForecast = cityWeather.hourlyForecast
      .filter((forecast) => {
        const forecastHour = parseInt(forecast.time.split(':')[0], 10);
        return forecastHour >= currentHour;
      })
      .slice(0, 5);

    if (nextFiveHoursForecast.length < 5) {
      const remainingHours = 5 - nextFiveHoursForecast.length;
      nextFiveHoursForecast.push(
        ...cityWeather.hourlyForecast.slice(0, remainingHours)
      );
    }

    return nextFiveHoursForecast;
  }
}
