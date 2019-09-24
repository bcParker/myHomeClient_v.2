import { Weather } from './weather';
import { WeatherMain } from './weatherMain';
import { Wind } from './wind';
import { Name } from './name';

export interface CurrentWeather {
	weather: Weather[];
	main: WeatherMain;
	wind: Wind;
	name: Name;
}