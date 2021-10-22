import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import { Container } from './src/components/Background/style'

import TextBox from './src/components/TextBox'

export default function App() {
    return (
        <Container>
            <View>
                <Text>BOTÃO</Text>
            </View>

            <View>
                <TextBox placeholder="Nome do usuário" />
                <TextBox iconName="vpn-key" placeholder="Senha do usuário" isPassword={true} />
                <TextBox
                    style={{ marginTop: 80, padding: 5 }}
                    iconName="person"
                    placeholder="Login do usuário"
                    keyboardType="email-address"
                />
            </View>

            <View>
                <Text>BOTÃO</Text>
            </View>
        </Container>
    )
}

// const styles = StyleSheet.create({
//     containerContent: {
//         flexDirection: 'column',
//         backgroundColor: 'grey',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//     },
// })
