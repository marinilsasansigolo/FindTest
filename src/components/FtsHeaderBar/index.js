import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import FtsBackButton from '../FtsHeaderBackButton'

export default function FtsHeaderBar(props) {
    return (
        <View style={styles.container}>
            <FtsBackButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 37,
    },
})
