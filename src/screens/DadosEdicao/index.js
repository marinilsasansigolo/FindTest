import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'
import { getFirestore, updateDoc, doc } from 'firebase/firestore'
import firebaseApp from '../../config/firebaseConfig'

export default function DadosEdicao({ navigation, route }) {
    //Banco de dados
    const database = getFirestore(firebaseApp)

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.nome)
    const [emailEdit, setemail] = useState(route.params.email)
    const [enderecoEdit, setendereco] = useState(route.params.endereco)
    const [telefoneEdit, settelefone] = useState(route.params.telefone)
    const [horaaberturaEdit, sethoraabertura] = useState(route.params.horaabertura)
    const [cidadeEdit, setcidade] = useState(route.params.cidade)
    const [horafecharEdit, sethorafechar] = useState(route.params.horafechar)

    const idTask = route.params.id

    async function editTask(id) {
        await updateDoc(doc(database, 'Endereco', id), {
            nome: descriptionEdit,
            email: emailEdit,
            endereco: enderecoEdit,
            telefone: telefoneEdit,
            horaabertura: horaaberturaEdit,
            cidade: cidadeEdit,
            horafechar: horafecharEdit,
        })

        navigation.navigate('Task')
    }
    //

    const [estado, setEstado] = useState([
        { id: 1, nome: 'Paraná', sigla: 'PR' },
        { id: 2, nome: 'Pernambuco', sigla: 'PE' },
        { id: 3, nome: 'Piauí', sigla: 'PI' },
        { id: 4, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ])

    const [estadoSelecionado, setEstadoSelecionado] = useState(0)

    // let itensEstados = estado.map((value, key) => {
    //     return <Picker.Item key={key} value={key} label={value.sigla} />
    // })
    return (
        <FtsBackground>
            <View style={estilos.logoContainer}>
                <FtsLogo />
            </View>
            <KeyboardAvoidingView behavior="padding" style={estilos.containerContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={estilos.inputsContainer}>
                        <View style={estilos.input}>
                            <View style={estilos.container}>
                                <FtsTextBox
                                    color="red"
                                    iconName="person"
                                    style={estilos.input}
                                    onChangeText={setDescriptionEdit}
                                    value={descriptionEdit}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={estilos.input}>
                        <View style={estilos.container}>
                            <FtsTextBox
                                color="red"
                                iconName="mail"
                                style={estilos.input}
                                onChangeText={setemail}
                                value={emailEdit}
                            />
                        </View>
                    </View>

                    <View style={estilos.input}>
                        <View style={estilos.container}>
                            <FtsTextBox
                                color="red"
                                iconName="smartphone"
                                style={estilos.input}
                                onChangeText={settelefone}
                                value={telefoneEdit}
                            />
                        </View>
                    </View>

                    <View style={estilos.input}>
                        <View style={estilos.container}>
                            <FtsTextBox
                                color="red"
                                iconName="watch"
                                style={estilos.input}
                                onChangeText={sethoraabertura}
                                value={horaaberturaEdit}
                            />
                        </View>
                    </View>

                    <View style={estilos.input}>
                        <View style={estilos.container}>
                            <FtsTextBox
                                color="red"
                                iconName="watch"
                                style={estilos.input}
                                onChangeText={sethorafechar}
                                value={horafecharEdit}
                            />
                        </View>
                    </View>

                    <View style={estilos.input}>
                        <View style={estilos.container}>
                            <FtsTextBox
                                color="red"
                                iconName="house"
                                style={estilos.input}
                                onChangeText={setendereco}
                                value={enderecoEdit}
                            />
                        </View>
                    </View>

                    <View style={estilos.inputsRow}>
                        {/* <Picker
                            style={estilos.picker}
                            selectedValue={estadoSelecionado}
                            onValueChange={(itemValue, itemIndex) => {
                                setEstadoSelecionado({ estadoSelecionado: itemValue })
                            }}
                        >
                            {itensEstados}
                        </Picker> */}

                        <View style={estilos.input}>
                            <FtsTextBox
                                color="red"
                                iconName="map"
                                style={estilos.input}
                                onChangeText={setcidade}
                                value={cidadeEdit}
                            />
                            <TouchableOpacity
                                style={estilos.buttonNewTask}
                                onPress={() => {
                                    editTask(idTask)
                                }}
                            >
                                <Text style={estilos.iconButton}>Salvar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </FtsBackground>
    )
}

const estilos = StyleSheet.create({
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
