import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type Props = {

};

const NavBar: React.FC<Props> = ({

}) => {
    return (
        <View style={styles.bar}>
            <TouchableOpacity style={styles.circle} onPress={() => console.info('search pressed!')}>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        flex: 1, 
        backgroundColor: 'darkorange', 
        justifyContent: 'flex-end',
        alignItems: 'center',
        maxHeight: '5%'
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