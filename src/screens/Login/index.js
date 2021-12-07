import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'

// Essa linha causa o erro: "Asyncstorage has been extracted from..."
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorLogin, setErrorLogin] = useState(false)

    useEffect(() => {
        const auth = getAuth()

        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigation.navigate('MenuPrincipal', { user })
            }
        })
    }, [])

    // Função de login:
    const loginFirebase = () => {
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user

                navigation.navigate('MenuPrincipal', { user })
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message

                setErrorLogin(true)
            })
    }

    return (
        <FtsBackground>
            {/* <View style={styles.headerBar}>
                <FtsHeaderBar navigation />
            </View> */}

            <KeyboardAvoidingView
                style={styles.containerContent}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            // style={styles.inputText}
                            color="red"
                            iconName="mail"
                            placeholder="E-mail"
                            onChangeText={(text) => {
                                setEmail(text)
                                setErrorLogin(false)
                            }}
                        />
                    </View>
                    <FtsTextBox
                        iconName="vpn-key"
                        placeholder="Senha"
                        isPassword={true}
                        onChangeText={(text) => {
                            setSenha(text)
                            setErrorLogin(false)
                        }}
                    />
                    {errorLogin && (
                        <View style={styles.contentAlert}>
                            <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                            <Text style={styles.warningAlert}>E-mail ou senha inválido</Text>
                        </View>
                    )}
                </View>
            </KeyboardAvoidingView>

            <View style={styles.bottomContent}>
                <View>
                    <View style={styles.button}>
                        <FtsButton text="Entrar" onPress={loginFirebase} />

                        <View style={styles.bottomTextContainer}>
                            <Text style={styles.bottomText}>Não é usuário?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Home')
                                }}
                            >
                                <Text
                                    style={[styles.bottomText, styles.bottomTextRegister]}
                                    onPress={() => {
                                        navigation.navigate('SignUp')
                                    }}
                                >
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
    contentAlert: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    warningAlert: {
        paddingLeft: 10,
        color: '#bdbdbd',
        fontSize: 15,
    },
})
