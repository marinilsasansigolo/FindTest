import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ToastAndroid, StyleSheet } from 'react-native'

import {
    getFirestore,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { FontAwesome, Foundation } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function EditarLocalScreen({ navigation }) {
    const database = getFirestore(firebaseApp)
    const auth = getAuth()
    const user = auth.currentUser

    const [local, setLocal] = useState([])

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [horarioAtendimento, setHorarioAtendimento] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('PR')

    useEffect(() => {
        async function carregarDados() {
            const localCollection = await query(
                collection(database, `usuario/${user.uid}/local`),
                orderBy('nome')
            )

            onSnapshot(localCollection, (doc) => {
                const list = []

                doc.forEach((document) => {
                    let local = {
                        id: document.id,
                        nome: document.data().nome,
                        email: document.data().email,
                        telefone: document.data().telefone,
                        horarioAtendimento: document.data().horarioAtendimento,
                        endereco: document.data().endereco,
                        cidade: document.data().cidade,
                        uf: document.data().uf,
                        renderizado: true,
                    }

                    list.push(local)
                })

                setLocal(list)
            })
        }

        carregarDados()
    }, [])

    function editarLocal(item) {
        navigation.navigate('DadosEdicao', {
            id: item.id,
            nome: item.nome,
            email: item.email,
            telefone: item.telefone,
            horarioAtendimento: item.horarioAtendimento,
            endereco: item.endereco,
            cidade: item.cidade,
            uf: item.uf,
        })
    }

    async function deleteLocal(id) {
        await deleteDoc(doc(database, `usuario/${user.uid}/local`, id))

        ToastAndroid.show('Local excluído', ToastAndroid.SHORT)
    }

    return (
        <FtsBackground>
            <View style={styles.logoContainer}>
                <FtsLogo />
            </View>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={local}
                    keyExtractor={(item) => item.id}
                    // extraData={refresh}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.locals}>
                                <TouchableOpacity onPress={() => editarLocal(item)}>
                                    <FontAwesome
                                        name="edit"
                                        size={27}
                                        color={'#B9D1DC'}
                                    ></FontAwesome>
                                </TouchableOpacity>
                                <Text style={styles.localName} onPress={() => editarLocal(item)}>
                                    {item.nome}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteLocal(item.id)
                                    }}
                                >
                                    <Foundation
                                        name="trash"
                                        size={27}
                                        color={'#B9D1DC'}
                                    ></Foundation>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
            <TouchableOpacity
                style={styles.buttonNewLocal}
                onPress={() => {
                    navigation.navigate('CadastrarLocal')
                }}
            >
                <Text style={styles.iconButtonNewLocal}>+</Text>
            </TouchableOpacity>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingLeft: 20,
    },
    headerBar: {
        // backgroundColor: 'black',
    },
    logoContainer: {
        alignItems: 'center',
    },
    locals: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    localName: {
        width: '75%',
        alignContent: 'flex-start',
        borderBottomWidth: 0.7,
        borderBottomColor: '#5F9EA0',
        marginBottom: 5,
        color: '#B9D1DC',
    },
    buttonNewLocal: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 30,
        left: 20,
        backgroundColor: '#4DD0E2',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonNewLocal: {
        color: '#343434',
        fontSize: 27,
        fontWeight: 'bold',
    },
})
