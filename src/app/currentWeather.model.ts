import { Weather } from './weather';
import { WeatherMain } from './weatherMain';
import { Wind } from './wind';

export interface CurrentWeather {
	weather: Weather[];
	main: WeatherMain;
	wind: Wind;
	name: string;
}