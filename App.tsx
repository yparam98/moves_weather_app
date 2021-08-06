import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import CurrentForecast from './Components/CurrentForecast';
import NavBar from './Components/NavBar';
import SevenDayForecast from './Containers/SevenDayForecast';
import SearchBar from './Components/SearchBar';
import axios from 'axios';
import moment from 'moment';

export type Weather = {
	coords: [number, number],
	date: number,
	temperature: number,
	real_feel: number,
	weather: string,
	image: number,
	sunrise: number,
	sunset: number,
	min: number,
	max: number,
	wind_speed: number,
	pop: number,
	humidity: number,
};


const App = () => {

	const [currentWeather, setCurrentWeather] = useState<Weather>({
		coords: [0.0, 0.0],
		date: 0,
		temperature: 0,
		real_feel: 0,
		weather: '',
		image: 0,
		sunrise: 0,
		sunset: 0,
		min: 0,
		max: 0,
		wind_speed: 0,
		pop: 0,
		humidity: 0,
	});

	const [sevenDays, setSevenDays] = useState<Weather[]>([{
		coords: [0.0, 0.0],
		date: 0,
		temperature: 0,
		real_feel: 0,
		weather: '',
		image: 0,
		sunrise: 0,
		sunset: 0,
		min: 0,
		max: 0,
		wind_speed: 0,
		pop: 0,
		humidity: 0,
	}]);

	const [lat, setLat] = useState(43.653226);
	const [long, setLong] = useState(-79.3831843);



	useEffect(() => {
		console.log(lat + ", " + long);

		axios.get(
			'https://api.openweathermap.org/data/2.5/onecall',
			{
				params: {
					"lat": lat,
					"lon": long,
					"exclude": "minutely,hourly,alerts",
					"appid": "c683404852bbb811b7477d473f10e89d",
					"units": "metric",
				},
			},
		).then((response) => {
			setCurrentWeather(currentWeather => ({
				...currentWeather,
				coords: [response.data.lat, response.data.lon],
				temperature: response.data.current.temp,
				real_feel: response.data.current.feels_like,
				weather: response.data.current.weather[0].main,
				image: (response.data.current.weather[0].main == "Clear" ? ((moment.unix(response.data.current.dt).hour() > 7 && moment.unix(response.data.current.dt).hour() < 21) ? 9 : 10) :
					parseInt(response.data.current.weather[0].id.toString().charAt(0))),
				sunrise: response.data.current.sunrise,
				sunset: response.data.current.sunset,
			}));

			setSevenDays([]);

			for (let day of response.data.daily) {
				let obj: Weather = {
					coords: [0, 0],
					date: day.dt,
					temperature: day.temp.day,
					real_feel: day.feels_like.day,
					weather: day.weather[0].main,
					image: (day.weather[0].main == "Clear" ? 9 :
						parseInt(day.weather[0].id.toString().charAt(0))),
					sunrise: day.sunrise,
					sunset: day.sunset,
					min: day.temp.min,
					max: day.temp.max,
					wind_speed: day.wind_speed,
					pop: day.pop,
					humidity: day.humidity,
				};

				setSevenDays(sevenDays => [...sevenDays, obj]);
			}
		}).catch((err) => {
			console.error("[Axios] " + err.message);
		});
	}, [lat, long]);

	const isDarkMode = useColorScheme() === 'dark';

	return (
		<NavigationContainer>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<View style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
					<SearchBar latitude={setLat} longitude={setLong} />
					<CurrentForecast forecast={currentWeather} />
					<SevenDayForecast forecast={sevenDays} />
					<NavBar />
				</View>
			</SafeAreaView>
		</NavigationContainer>
	);
};

export default App;
