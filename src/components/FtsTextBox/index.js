import React from 'react'
import { TextInput, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

import styles from './style'

export default function FtsTextBox(props) {
    return (
        <View style={styles.container}>
            {props.iconName && <MaterialIcons style={styles.icon} name={props.iconName} />}

            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                secureTextEntry={props.isPassword}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}
