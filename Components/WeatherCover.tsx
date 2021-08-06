import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Weather } from '../App';



export type Props = {
    forecast: Weather
};

const WeatherCover: React.FC<Props> = ({
    forecast,
    children
}) => {
    const images = [
        null,
        null,
        require("../assets/icons/2.png"),
        require("../assets/icons/3.png"),
        null,
        require("../assets/icons/5.png"),
        require("../assets/icons/6.png"),
        null,
        require("../assets/icons/8.png"),
        require("../assets/icons/clear.png"),
        require("../assets/icons/night.png"),
    ];


    return (
        <View style={styles.card}>
            <ImageBackground
                style={styles.background}
                source={images[forecast.image]}
                blurRadius={30}
            >
                <View style={styles.darken}>
                    <Image style={styles.icon} source={images[forecast.image]} resizeMode={'contain'} />
                    <Text style={styles.weather}>{forecast.weather}</Text>
                    <Text style={styles.temperature}>{Math.round(forecast.temperature)}°C</Text>
                    {children}
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderStyle: 'solid',
        // borderBottomStartRadius: 45,
    },
    background: {
        flex: 1,
        height: '100%',
        aspectRatio: 3,
        resizeMode: 'cover',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    darken: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: '40%',
    },
    weather: {
        color: 'white',
        fontSize: 36,
    },
    temperature: {
        color: 'white',
        fontSize: 24,
    },
});

export default WeatherCover;