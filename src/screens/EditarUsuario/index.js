import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'

import { getFirestore, updateDoc, doc, getDoc, query, collection, where } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'
import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function EditarUsuarioScreen({ navigation }) {
    const database = getFirestore(firebaseApp)
    const auth = getAuth()
    const user = auth.currentUser

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorRegister, setErrorRegister] = useState(false)

    useEffect(() => {
        localizarUsuario(user)
    }, [])

    // Recupera os dados do usuário logado:
    async function localizarUsuario(user) {
        const docRef = doc(database, 'usuario', user.uid)
        const docSnap = await getDoc(docRef)

        setNome(docSnap.data().nome)
        setEmail(docSnap.data().email)
    }

    // Função de registro:
    async function salvarUsuario() {
        const docRefLocal = doc(database, 'usuario', user.uid)

        await updateDoc(docRefLocal, {
            nome,
            email,
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
                            value={nome}
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
                            value={email}
                            onChangeText={(text) => {
                                setEmail(text)
                                setErrorRegister(false)
                            }}
                        />
                    </View>
                    {/* <FtsTextBox
                        iconName="vpn-key"
                        placeholder="Senha"
                        isPassword={true}
                        onChangeText={(text) => {
                            setSenha(text)
                            setErrorRegister(false)
                        }}
                    /> */}
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
                        <FtsButton text="Salvar" onPress={salvarUsuario} />
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
    },
    headerBar: {
        // backgroundColor: 'black',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
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
