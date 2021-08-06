import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import IconView from './IconView';

export type Props = {
    icon: number,
    label: string,
    value: number|string
};

export const images = [
    null, // 0
    null, // 1
    require("../assets/icons/2.png"), // 2
    require("../assets/icons/3.png"), // 3
    null, // 4
    require("../assets/icons/5.png"), // 5
    require("../assets/icons/6.png"), // 6
    null, // 7
    require("../assets/icons/8.png"), // 8
    require("../assets/icons/clear.png"), // 9
    require("../assets/icons/night.png"), // 10
    require("../assets/icons/max.png"), // 11
    require("../assets/icons/min.png"), // 12
    require("../assets/icons/sunrise.png"), // 13
    require("../assets/icons/sunset.png"), // 14
    require("../assets/icons/windy.png"), // 15
];

const WeatherCover: React.FC<Props> = ({
    icon,
    label,
    value,
    children
}) => {
    return (
        <View style={styles.card}>
            <ImageBackground
                style={styles.background}
                source={images[icon]}
                blurRadius={30}
            >
                <View style={styles.darken}>
                    <IconView icon={icon} label={label} value={value} />
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
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: '100%',
        alignItems: 'center',
        padding: 10,
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