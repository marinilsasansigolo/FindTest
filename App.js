import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import Background from './src/components/Background'
import TextBox from './src/components/TextBox'

export default function App() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerContent}>
                <TextBox iconName="search" placeholder="Nome do usuário" />
                <TextBox
                    iconName="person"
                    placeholder="Login do usuário"
                    keyboardType="email-address"
                />
                <TextBox iconName="vpn-key" placeholder="Senha do usuário" isPassword={true} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4DD0E2',
        margin: 15,
        marginTop: 25,
    },
    containerContent: {
        flexDirection: 'column',
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})
