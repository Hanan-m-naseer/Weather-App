
export interface CurrentWeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}

export interface ForecastData {
  day: string;
  temperature: number;
  condition: string;
}

export interface WeatherApiResponse {
  current: CurrentWeatherData;
  forecast: ForecastData[];
}
