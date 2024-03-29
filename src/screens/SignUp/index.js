import React, { useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'
import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function SignUpScreen({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorRegister, setErrorRegister] = useState(false)

    const database = getFirestore(firebaseApp)

    // Função de registro:
    function registerFirebase() {
        const auth = getAuth()

        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user
                cadastrarUsuario(user)
            })
            .catch((error) => {
                setErrorRegister('Não foi possível cadastrar este usuário')

                if (error.code === 'auth/email-already-in-use') {
                    setErrorRegister('Este usuário já existe')
                }
            })
    }

    async function cadastrarUsuario(user) {
        const usuario = {
            nome,
            email,
        }

        // Cria um novo usuário (collection): usuario | id do usuario logado -> campos: nome e email:
        await setDoc(doc(database, 'usuario', user.uid), {
            nome: nome,
            email: email,
        })

        navigation.navigate('MenuPrincipal')
    }

    return (
        <FtsBackground style={{ height: '100%' }}>
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
                            iconName="person"
                            placeholder="Nome do usuário"
                            onChangeText={(text) => {
                                setNome(text)
                                setErrorRegister(false)
                            }}
                        />
                    </View>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            iconName="mail"
                            placeholder="E-mail"
                            onChangeText={(text) => {
                                setEmail(text)
                                setErrorRegister(false)
                            }}
                        />
                    </View>
                    <FtsTextBox
                        iconName="vpn-key"
                        placeholder="Senha"
                        isPassword={true}
                        onChangeText={(text) => {
                            setSenha(text)
                            setErrorRegister(false)
                        }}
                    />
                    {errorRegister && (
                        <View style={styles.contentAlert}>
                            <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                            <Text style={styles.warningAlert}>{errorRegister}</Text>
                        </View>
                    )}
                </View>
            </KeyboardAvoidingView>
            <View style={styles.bottomContent}>
                <View>
                    <View style={styles.button}>
                        <FtsButton text="Cadastrar" onPress={registerFirebase} />
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
    bottomContent: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 17,
        // backgroundColor: 'purple',
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
