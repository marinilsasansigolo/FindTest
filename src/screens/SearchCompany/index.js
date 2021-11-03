import React, { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, FlatList } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsSearchBar from '../../components/FtsSearchBar'
import FtsHeaderBar from '../../components/FtsHeaderBar'
import FtsCompany from '../../components/FtsCompany'

export default function SearchCompanyScreen({ navigation }) {
    const [data, setData] = useState([
        {
            id: 1,
            nome: 'Farmácia Santa Maria',
            atendimento: 'Aberto agora 07:00 - 22:00',
            telefone: '(46) 95400-1455',
            email: 'santam@gmail.com',
            endereco: 'Av. Bruno Zution, 400 - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
        {
            id: 2,
            nome: 'Farmácia Brava',
            atendimento: 'Aberto agora 08:00 - 18:00',
            telefone: '(46) 954320-0458',
            email: 'farmacia.brava@gmail.com',
            endereco: 'Av. Bruno Zution, s/n - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
        {
            id: 3,
            nome: 'Farmácia Silvestre',
            atendimento: 'Fechado agora',
            telefone: '(46) 9900-2020',
            email: 'farma_silvestre@gmail.com',
            endereco: 'Av. Bruno Zution, 1044 - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
        {
            id: 4,
            nome: 'Farmácia Santa Maria III',
            atendimento: 'Aberto agora 07:00 - 22:00',
            telefone: '(46) 95400-1455',
            email: 'santam@gmail.com',
            endereco: 'Av. Bruno Zution, 400 - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
        {
            id: 5,
            nome: 'Farmácia Sabin',
            atendimento: 'Aberto agora 08:00 - 18:00',
            telefone: '(46) 954320-0458',
            email: 'farmacia.brava@gmail.com',
            endereco: 'Av. Bruno Zution, s/n - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
        {
            id: 6,
            nome: 'Drogaria Rosário',
            atendimento: 'Fechado agora',
            telefone: '(46) 9900-2020',
            email: 'farma_silvestre@gmail.com',
            endereco: 'Av. Bruno Zution, 1044 - Centro',
            cidade: 'Realeza',
            uf: 'PR',
        },
    ])

    return (
        <FtsBackground>
            <KeyboardAvoidingView behavior="padding" style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.searchContainer}>
                        <FtsSearchBar />
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
