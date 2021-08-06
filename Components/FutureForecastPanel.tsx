import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Weather } from '../App';
import WeatherCover from './WeatherCover';
// import { Weather } from './CurrentForecast';



export type Props = {
    forecast: Weather
};

const FutureForecastPanel: React.FC<Props> = ({
    forecast
}) => {
    return (
        <TouchableOpacity style={styles.card}>
            {/* <Text>{forecast.real_feel}</Text> */}
            <WeatherCover forecast={forecast}>
                <Text></Text>
                <Text style={styles.real_feel}>{moment.unix(forecast.date).format('dddd, LL')}</Text>
            </WeatherCover>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        overflow: 'hidden',
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderStyle: 'solid',
        borderRadius: 20,
    },
    weather: {
        color: 'white',
        fontSize: 24,
    },
    temperature: {
        color: 'white',
        fontSize: 18,
    },
    real_feel: {
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic'
    },
});

export default FutureForecastPanel;