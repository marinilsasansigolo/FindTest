import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import styles from './style'

export default function Background() {
    return (
        <LinearGradient
            style={styles.Background}
            colors={['#08B6CB', '#1C6877', '#0D6175', '#45A3BF']}
        ></LinearGradient>
    )
}
