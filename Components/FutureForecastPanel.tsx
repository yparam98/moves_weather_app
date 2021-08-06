import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Weather } from '../App';
import Details from './Details';
import WeatherCover from './WeatherCover';



export type Props = {
    forecast: Weather
};

const FutureForecastPanel: React.FC<Props> = ({
    forecast
}) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <Modal animationType={'slide'} visible={modalShow} onRequestClose={() => { setModalShow(false) }} presentationStyle={'pageSheet'}>
                <WeatherCover icon={forecast.image} label={forecast.weather} value={Math.round(forecast.temperature)}>
                    <Details forecast={forecast} />
                </WeatherCover>
            </Modal>
            <TouchableOpacity style={styles.card} onPress={() => { setModalShow(true) }}>
            <WeatherCover icon={forecast.image} label={forecast.weather} value={Math.round(forecast.temperature)}>
                    <Text></Text>
                    <Text style={styles.real_feel}>{moment.unix(forecast.date).format('dddd, LL')}</Text>
                </WeatherCover>
            </TouchableOpacity>
        </View>
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