import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList, ToastAndroid, Button } from 'react-native'

import { getFirestore, collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore'

import { FontAwesome } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'

import styles from './style'

export default function EditarLocal({ navigation }) {
    const database = getFirestore(firebaseApp)
    const [task, setTask] = useState([])

    async function deleteTask(id) {
        await deleteDoc(doc(database, 'Endereco', id))

        ToastAndroid.show('Tarefa excluída', ToastAndroid.SHORT)
    }

    useEffect(() => {
        async function carregarDados() {
            setTask([])

            const taskCollection = await query(collection(database, 'Endereco'))

            onSnapshot(taskCollection, (doc) => {
                const list = []

                doc.forEach((document) => {
                    let task = {
                        id: document.id,
                        nome: document.data().nome,
                        email: document.data().email,
                        endereco: document.data().endereco,
                        telefone: document.data().telefone,
                        horaabertura: document.data.horaabertura,
                        cidade: document.data.cidade,
                        horafechar: document.data.horafechar,
                        renderizado: true,
                    }

                    list.push(task)
                })

                setTask(list)
            })
        }

        carregarDados()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                keyExtractor={(item) => item.id}
                // extraData={refresh}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="trash-o"
                                    size={27}
                                    color={'#f92e6a'}
                                ></FontAwesome>
                            </TouchableOpacity>
                            <Button
                                title="Editar..."
                                onPress={() => {
                                    navigation.navigate('DadosEdicao', {
                                        id: item.id,
                                        nome: item.nome,
                                        email: item.email,
                                        endereco: item.endereco,
                                        telefone: item.telefone,
                                        horaabertura: item.horaabertura,
                                        cidade: item.cidade,
                                        horafechar: item.horafechar,
                                    })
                                }}
                            />
                            <Text style={styles.NomeTask}>{item.nome}</Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    navigation.navigate('DadosEdicao')
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
