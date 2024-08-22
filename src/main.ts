import { Component, effect, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { WeatherComponent } from './app/weather/weather.component';
import { WeatherService } from './app/weather.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  template: `
    <app-weather
    [cities]="cities().cities"
    />
  `,
})
export class App {
  cities = inject(WeatherService).getWeathers();
}

bootstrapApplication(App);
