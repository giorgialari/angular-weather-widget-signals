// Interfaccia per le previsioni orarie
export interface HourlyForecast {
  time: string;
  temperature: string;
  condition: string;
  icon: string;
}

// Interfaccia per i dettagli aggiuntivi (umidità, forza del vento, indice UV)
export interface AdditionalDetails {
  humidity: string;
  windForce: string;
  uvIndex: string;
}

// Interfaccia principale per le città
export interface CityWeather {
  id: number;
  city: string;
  temperature: string;
  description: string;
  sunrise: string;
  sunset: string;
  additionalDetails: AdditionalDetails;
  hourlyForecast: HourlyForecast[];
}

// Interfaccia per l'array di città
export interface CitiesResponse {
  cities: CityWeather[];
}
