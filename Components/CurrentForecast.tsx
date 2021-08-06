import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import WeatherCover from './WeatherCover';
import { Weather } from '../App';

export type Props = {
    forecast: Weather
};



const CurrentForecast: React.FC<Props> = ({
    forecast
}) => {
    return (
        <View style={styles.card}>
            {
                forecast.temperature != 0 ? (
                    <WeatherCover icon={forecast.image} label={forecast.weather} value={Math.round(forecast.temperature)+"°C"}>
                        <Text></Text>
                        <Text style={styles.real_feel}>Feeling like {Math.round(forecast.real_feel)}°C</Text>
                    </WeatherCover>
                ) : <ActivityIndicator size='large' color='teal' />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderTopStartRadius: 45,
        borderBottomStartRadius: 45,
        overflow: 'hidden',
        width: '60%',
        alignSelf: 'flex-end'
    },
    real_feel: {
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic'
    }
});

export default CurrentForecast;