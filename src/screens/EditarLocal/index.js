import React, { useState, useEffect } from 'react'

import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'

import {
    getFirestore,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    limit,
} from 'firebase/firestore'

import { FontAwesome } from '@expo/vector-icons'

import firebaseApp from '../../config/firebaseConfig'

import styles from './style'

export default function Task({ navigation }) {
    const database = getFirestore(firebaseApp)
    const [task, setTask] = useState([])

    async function deleteTask(id) {
        await deleteDoc(doc(database, 'FindTest', id))

        ToastAndroid.show('Tarefa excluída', ToastAndroid.SHORT)
    }

    useEffect(() => {
        async function carregarDados() {
            setTask([])

            const taskCollection = await query(collection(database, 'FindTest'))

            onSnapshot(taskCollection, (doc) => {
                const list = []

                doc.forEach((document) => {
                    let task = {
                        id: document.id,
                        nome: document.data().nome,
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
                            <Text
                                style={styles.NomeTask}
                                onPress={() => {
                                    navigation.navigate('DadosEdicao', {
                                        id: item.id,
                                        nome: item.nome,
                                    })
                                }}
                            >
                                {item.nome}
                            </Text>
                        </View>
                    )
                }}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    navigation.navigate('CadastrarLocal')
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
