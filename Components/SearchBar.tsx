import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export type Props = {
    latitude?: Dispatch<SetStateAction<number>>,
    longitude?: Dispatch<SetStateAction<number>>,
};

const SearchBar: React.FC<Props> = ({
    latitude,
    longitude,
}) => {
    const GOOGLE_API_KEY = "AIzaSyCDJFezasQo-77I_8_1qeBariEqpQ9RvTE";
    const [valuePlaceholder, setValuePlaceholder] = useState('Search');

    function getCoords(name: string) {
        axios.get(
            'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
            {
                params: {
                    "key": GOOGLE_API_KEY,
                    "input": name,
                    "inputtype": "textquery",
                },
            },
        ).then((place) => {
            axios.get(
                'https://maps.googleapis.com/maps/api/place/details/json',
                {
                    params: {
                        "place_id": place.data.candidates[0].place_id,
                        "key": GOOGLE_API_KEY,
                    },
                },
            ).then((results) => {
                if (latitude != undefined && results.data.result.geometry.location.lat != undefined) {
                    latitude(results.data.result.geometry.location.lat);
                }
                if (longitude != undefined && results.data.result.geometry.location.long != undefined) {
                    longitude(results.data.result.geometry.location.long);
                }

                setValuePlaceholder(results.data.result.formatted_address);
            }).catch((err) => {
                console.error(err);
            })
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <TextInput style={styles.bar} placeholder={valuePlaceholder} onEndEditing={(data) => { getCoords(data.nativeEvent.text) }}>

        </TextInput>
    );
};

const styles = StyleSheet.create({
    bar: {
        flex: 1,
        fontSize: 24,
        padding: 10,
        paddingStart: 20,
        backgroundColor: 'white',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        maxHeight: '7%',
        // borderWidth: 0.5,
        elevation: 3,
        borderRadius: 45,
        margin: 10
    },
});

export default SearchBar;