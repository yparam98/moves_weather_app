/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CurrentForecast from './Components/CurrentForecast';

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<SafeAreaView>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<CurrentForecast/>
		</SafeAreaView>
	);
};

export default App;
