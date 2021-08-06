import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export type Props = {
    latitude?: Dispatch<SetStateAction<number>>,
    longitude?: Dispatch<SetStateAction<number>>,
};

const NavBar: React.FC<Props> = ({
latitude,
longitude
}) => {
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={styles.circle} onPress={() => {
                if (latitude != undefined) {
                    latitude(Math.random()*89);
                } else if (longitude != undefined) {
                    longitude(Math.random()*179);
                }
            }}>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        flex: 1, 
        backgroundColor: 'indigo', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxHeight: '5%',
    },
    circle: {
        height: 60,
        width: 60,
        borderRadius: 90,
        backgroundColor: 'white',
        marginBottom: 10,
        elevation: 3,
    }
});

export default NavBar;