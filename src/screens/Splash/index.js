import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { FtsBackground } from '../../components/FtsBackground'
import FtsLogo from '../../components/FtsLogo'

export default function SplashScreen({ navigation }) {
    // useEffect(() => {
    //     const auth = getAuth()

    //     // Desconecta o usuário logado:
    //     // signOut(auth)
    //     //     .then(() => {})
    //     //     .catch((error) => {})
    // }, [])

    return (
        <FtsBackground>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.text}
                        onPress={() => {
                            navigation.navigate('Home')
                        }}
                    >
                        Bem-vindo!
                    </Text>
                </View>
            </View>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 105,
    },
    text: {
        fontSize: 23,
        color: '#C1D4DC',
        fontWeight: 'bold',
    },
})
