import React, { useEffect } from 'react'
import { Alert, StyleSheet, View, BackHandler } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'

export default function HomeScreen({ navigation }) {
    const backAction = () => {
        // Alert.alert('Sair', 'Tem certeza que deseja sair?', [
        //     {
        //         text: 'Cancelar',
        //         onPress: () => null,
        //     },
        //     { text: 'Sim', onPress: () => BackHandler.exitApp() },
        // ])
        return true
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => backHandler.remove()
    }, [])

    return (
        <FtsBackground>
            <View style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Editar estabelecimento"
                                onPress={() => {
                                    navigation.navigate('EditarLocal')
                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Editar dados pessoais"
                                onPress={() => {
                                    navigation.navigate('SignUp')
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        alignItems: 'center',
    },
    logoContainer: { flex: 1 },
    buttonsContainer: { flex: 2, marginTop: 100 },
    button: { marginVertical: 10 },
})
