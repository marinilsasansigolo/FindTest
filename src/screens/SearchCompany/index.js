import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, FlatList } from 'react-native'

import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import firebaseApp from '../../config/firebaseConfig'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsSearchBar from '../../components/FtsSearchBar'
import FtsHeaderBar from '../../components/FtsHeaderBar'
import FtsCompany from '../../components/FtsCompany'

export default function SearchCompanyScreen({ navigation }) {
    const database = getFirestore(firebaseApp)
    const auth = getAuth()
    const user = auth.currentUser

    const [data, setData] = useState([])
    const [originalData, setOriginalData] = useState([])
    const [filtro, setFiltro] = useState('')

    useEffect(() => {
        carregarDados()
    }, [])

    async function carregarDados() {
        const list = []

        // Lista todos os usuários:
        const usuariosCollections = await getDocs(collection(database, `usuario`))

        // Percorre todos os usuários:
        usuariosCollections.forEach(async (usuario) => {
            const docsSnap = await getDocs(collection(database, `usuario/${usuario.id}/local`))

            // Percorre a lista de documentos do usuário da iteração:
            docsSnap.forEach((document) => {
                const local = {
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

            setData(list)
            setOriginalData(list)
        })
    }

    function search(dadoPesquisado) {
        // Faz uma cópia dos dados da lista para esta constante, se usar o filter diretamente no state ele perderá os dados:
        const tempData = JSON.parse(JSON.stringify(originalData))
        setData(tempData.filter((d) => d.nome.toLowerCase().includes(dadoPesquisado.toLowerCase())))
    }

    return (
        <FtsBackground>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.containerContent}
            >
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.searchContainer}>
                        <FtsSearchBar
                            onChangeText={(s) => {
                                search(s)
                            }}
                        />
                    </View>
                    <View style={styles.listContent}>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return <FtsCompany dados={item} />
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
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
        // flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    listContainer: {
        flex: 1,
        // backgroundColor: 'purple',
        width: 310,
    },
    searchContainer: {
        justifyContent: 'center',
        // backgroundColor: 'skyblue',
        width: 310,
        marginVertical: 15,
    },
    listContent: {
        flex: 1,
        // backgroundColor: 'brown',
    },
})
