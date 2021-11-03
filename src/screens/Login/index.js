import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function LoginScreen({ navigation }) {
    return (
        <FtsBackground>
            {/* <View style={styles.headerBar}>
                <FtsHeaderBar navigation />
            </View> */}

            <KeyboardAvoidingView behavior="padding" style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.inputsContainer}>
                    <FtsTextBox
                        style={styles.inputText}
                        color="red"
                        iconName="person"
                        placeholder="Nome do usuário"
                    />
                    <FtsTextBox iconName="vpn-key" placeholder="Senha" isPassword={true} />
                </View>
            </KeyboardAvoidingView>

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
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 2,
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
        flex: 1,
        justifyContent: 'center',
        width: 310,
    },
    inputText: {
        marginBottom: 20,
    },
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 17,
        // backgroundColor: 'purple',
    },
    bottomTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    bottomText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#343434',
    },
    bottomTextRegister: {
        marginLeft: 7,
        color: '#fff',
    },
    button: {
        marginVertical: 10,
    },
})
