import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

export default function FtsButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 287,
        height: 58,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4DD0E2',
        borderColor: '#707070',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText: {
        fontSize: 20,
        color: '#343434',
    },
})
