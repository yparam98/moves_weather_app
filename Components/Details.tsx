import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Weather } from '../App';
import IconView from './IconView';

export type Props = {
    forecast: Weather
};

const Details: React.FC<Props> = ({
    forecast
}) => {
    return (
        <View style={styles.metadataContainer}>
            <Text style={styles.real_feel}>{moment.unix(forecast.date).format('dddd, LL')}</Text>
            <View style={styles.metadataCard}>
                <IconView icon={11} label={'Min'} value={Math.round(forecast.min)} />
                <IconView icon={12} label={'Max'} value={Math.round(forecast.min)} />
            </View>
            <View style={styles.metadataCard}>
                <IconView icon={13} label={'Sunrise'} value={moment.unix(forecast.sunrise).format('h:ma')} />
                <IconView icon={14} label={'Sunset'} value={moment.unix(forecast.sunset).format('h:ma')} />
            </View>
            <View style={styles.metadataCard}>
                <IconView icon={5} label={'POP'} value={forecast.pop + '%'} />
                <IconView icon={9} label={'Humidity'} value={forecast.humidity} />
                <IconView icon={15} label={'Wind Speed'} value={forecast.wind_speed} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    metadataContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        aspectRatio: 1,
        // backgroundColor: 'red',
    },
    metadataCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    metadataPanel: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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

export default Details;