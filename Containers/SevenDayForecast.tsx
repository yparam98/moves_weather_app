import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Weather } from '../App';
import FutureForecastPanel from '../Components/FutureForecastPanel';

export type Props = {
    forecast: Weather[]
};

const SevenDayForecast: React.FC<Props> = ({
    forecast
}) => {
    return (
        <View style={{ flex: 1, marginTop: 10, marginBottom: 10 }}>
            <Text style={styles.title}>7 Day Forecast</Text>
            {
                forecast != [] ? (
                    <ScrollView horizontal={true}>
                        {
                            forecast.map((day) => {
                                return <FutureForecastPanel forecast={day} />
                            })
                        }
                    </ScrollView>
                ) : <ActivityIndicator size={'large'} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginStart: 10,
        color: 'black',
        fontSize: 24,
    }
});

export default SevenDayForecast;