import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnChanges,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import { CitiesResponse, CityWeather, HourlyForecast } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
})
export class WeatherComponent implements OnChanges {
  cities = input.required<any>();
  city = signal({} as CityWeather);
  nextFiveForecasts: HourlyForecast[] = [];
  private service = inject(WeatherService);
  constructor() {
    effect(() => this.setNextFiveForecasts(this.city()));
  }

  ngOnChanges() {
    this.city.set(this.cities()[1]);
  }

  setCitySelected(cityId: string) {
    const findCity = this.cities().find((city: any) => {
      return city.id === +cityId;
    });
    this.city.set(findCity);
  }

  setNextFiveForecasts(city: CityWeather) {
    this.nextFiveForecasts = this.service.getNextFiveHoursForecast(city);
  }
}
