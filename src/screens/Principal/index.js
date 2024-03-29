import React, { useEffect } from 'react'
import { StyleSheet, View, BackHandler, Alert } from 'react-native'

import { getAuth, signOut } from 'firebase/auth'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'

export default function PrincipalScreen({ navigation }) {
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)

        return () => backHandler.remove()
    }, [])

    const backAction = () => {
        Alert.alert('Sair', 'Tem certeza que deseja sair?', [
            {
                text: 'Cancelar',
                onPress: () => null,
            },
            {
                text: 'Sim',
                onPress: () => {
                    logoff()
                    BackHandler.exitApp()
                },
            },
        ])
        return true
    }

    function logoff() {
        const auth = getAuth()

        // Desconecta o usuário logado:
        signOut(auth)
            .then(() => {})
            .catch((error) => {})
    }

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
                                text="Cadastrar Local"
                                onPress={() => {
                                    navigation.navigate('CadastrarLocal')
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Editar Dados"
                                onPress={() => {
                                    navigation.navigate('Dados')
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Pesquisar Local"
                                onPress={() => {
                                    navigation.navigate('SearchCompany')
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Menu Principal"
                                onPress={() => {
                                    navigation.navigate('Home')
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Sair" onPress={backAction} />
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
    buttonsContainer: { flex: 2, marginTop: 20 },
    button: { marginVertical: 10 },
})
