import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export default function HeaderBackButton(props) {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <MaterialIcons
                    style={styles.icon}
                    name="arrow-back-ios"
                    onPress={props.navigation?.goBack}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#fff',
    },
    icon: {
        color: '#fff',
        fontSize: 20,
        margin: 8,
    },
    input: {
        height: 50,
        color: '#fff',
    },
})
