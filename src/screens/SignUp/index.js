import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function SignUpScreen({ navigation }) {
    return (
        <FtsBackground>
            <KeyboardAvoidingView behavior="padding" style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox iconName="person" placeholder="Nome do usuário" />
                    </View>
                    <View style={styles.inputText}>
                        <FtsTextBox iconName="mail" placeholder="E-mail" />
                    </View>
                    <FtsTextBox iconName="vpn-key" placeholder="Senha" isPassword={true} />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.bottomContent}>
                <View>
                    <View style={styles.button}>
                        <FtsButton
                            text="Cadastrar"
                            onPress={() => {
                                navigation.navigate('MenuPrincipal')
                            }}
                        />
                    </View>
                </View>
                <View></View>
            </View>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        // backgroundColor: 'green',
    },
    headerBar: {
        // backgroundColor: 'black',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    inputsContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        width: 310,
    },
    inputText: {
        marginBottom: 20,
    },
    button: {
        marginVertical: 10,
    },
})
