import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function CadastrarLocalScreen({ navigation }) {
    const [estado, setEstado] = useState([
        { id: 1, nome: 'Paraná', sigla: 'PR' },
        { id: 2, nome: 'Pernambuco', sigla: 'PE' },
        { id: 3, nome: 'Piauí', sigla: 'PI' },
        { id: 4, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ])

    const [estadoSelecionado, setEstadoSelecionado] = useState(0)

    let itensEstados = estado.map((value, key) => {
        return <Picker.Item key={key} value={key} label={value.sigla} />
    })
    return (
        <FtsBackground>
            <View style={styles.logoContainer}>
                <FtsLogo />
            </View>
            <KeyboardAvoidingView behavior="padding" style={styles.containerContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputText}>
                            <FtsTextBox color="red" iconName="people" placeholder="Nome" />
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputText}>
                            <FtsTextBox color="red" iconName="mail" placeholder="E-mail" />
                        </View>

                        <View style={styles.inputText}>
                            <FtsTextBox color="red" iconName="smartphone" placeholder="Telefone" />
                        </View>
                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="watch"
                                placeholder="Horário de atendimento"
                            />
                        </View>

                        <View style={styles.inputText}>
                            <FtsTextBox color="red" iconName="house" placeholder="Endereço" />
                        </View>

                        <View style={styles.inputsRow}>
                            <Picker
                                style={styles.picker}
                                selectedValue={estadoSelecionado}
                                onValueChange={(itemValue, itemIndex) => {
                                    setEstadoSelecionado({ estadoSelecionado: itemValue })
                                }}
                            >
                                {itensEstados}
                            </Picker>

                            <View style={styles.inputText}>
                                <FtsTextBox color="red" iconName="map" placeholder="Cidade" />
                            </View>
                        </View>
                    </View>
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
                </ScrollView>
            </KeyboardAvoidingView>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 3,
        // backgroundColor: 'green',
    },
    headerBar: {
        // backgroundColor: 'black',
    },
    logoContainer: {
        flex: 0.8,
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    inputsContainer: {
        // flex: 1,
        justifyContent: 'center',
        width: 310,
    },
    inputText: {
        marginBottom: 20,
    },
    inputsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        height: 100,
        width: 100,
        color: '#fff',
    },
    bottomContent: {
        flex: 0.5,
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
