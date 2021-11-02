import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

export default function FtsLogo() {
    return <Image source={require('../../../assets/logo.png')} style={styles.margin} />
}

const styles = StyleSheet.create({
    margin: {
        marginTop: 60,
    },
})
