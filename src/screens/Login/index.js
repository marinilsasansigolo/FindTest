import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'

export default function LoginScreen({ navigation }) {
    return (
        <FtsBackground>
            <View style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.inputsContainer}>
                    <FtsTextBox iconName="person" placeholder="Nome do usuário" />
                    <FtsTextBox iconName="vpn-key" placeholder="Senha" isPassword={true} />
                </View>

                <View style={styles.bottomContent}>
                    <View>
                        <View style={styles.button}>
                            <FtsButton
                                text="Entrar"
                                onPress={() => {
                                    navigation.navigate('MenuPrincipal')
                                }}
                            />
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomText}>Não é usuário?</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Home')
                                    }}
                                >
                                    <Text style={[styles.bottomText, styles.bottomTextRegister]}>
                                        Cadastre-se
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View></View>
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
    logoContainer: {
        flex: 1,
    },
    inputsContainer: {
        flex: 1,
        justifyContent: 'center',
        width: 300,
    },
    bottomContent: {
        flex: 1,
        marginTop: 100,
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    bottomText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    bottomTextRegister: {
        marginLeft: 7,
        color: '#fff',
    },
    button: {
        marginVertical: 10,
    },
})
