import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { images } from './WeatherCover';

export type Props = {
    icon: number,
    label: string,
    value: number|string,
};

const IconView: React.FC<Props> = ({
    icon,
    label,
    value,
}) => {
    return (
        <View style={styles.darken}>
            <Image style={styles.icon} source={images[icon]} resizeMode={'contain'} />
            <Text style={styles.weather}>{label}</Text>
            <Text style={styles.temperature}>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    darken: {
        flex: 1,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    temperature: {
        color: 'white',
        fontSize: 20,
    },
    real_feel: {
        color: 'white',
        fontSize: 12,
        fontStyle: 'italic'
    },
    weather: {
        color: 'white',
        fontSize: 22,
    },
    icon: {
        height: '50%',
        marginBottom: 5,
    },
});

export default IconView;