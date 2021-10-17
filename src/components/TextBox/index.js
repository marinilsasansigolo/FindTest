import React from 'react'
import { TextInput, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import styles from './style'

export default function CaixaDeTexto(props) {
    return (
        <View style={styles.container}>
            <MaterialIcons style={styles.icon} name={props.iconName} />

            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.isPassword}
            />
        </View>
    )
}
