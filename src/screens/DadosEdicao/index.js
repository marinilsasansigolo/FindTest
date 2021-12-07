import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { getFirestore, updateDoc, doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import firebaseApp from '../../config/firebaseConfig'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function DadosEdicaoScreen({ navigation, route }) {
    const database = getFirestore(firebaseApp)
    const auth = getAuth()
    const user = auth.currentUser
    const id = route.params.id

    const [nome, setNome] = useState(route.params.nome)
    const [email, setEmail] = useState(route.params.email)
    const [telefone, setTelefone] = useState(route.params.telefone)
    const [horarioAtendimento, setHorarioAtendimento] = useState(route.params.horarioAtendimento)
    const [endereco, setEndereco] = useState(route.params.endereco)
    const [cidade, setCidade] = useState(route.params.cidade)
    const [uf, setUf] = useState(route.params.uf)

    // Edita um estabelecimento pertencente ao usuário logado:
    async function SalvarLocal() {
        const docRefLocal = doc(database, `usuario/${user.uid}/local`, id)

        await updateDoc(docRefLocal, {
            nome,
            email,
            telefone,
            horarioAtendimento,
            endereco,
            cidade,
            uf,
        })

        navigation.navigate('MenuPrincipal')
    }

    return (
        <FtsBackground>
            <View style={styles.logoContainer}>
                <FtsLogo />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.containerContent}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="people"
                                placeholder="Nome"
                                onChangeText={(text) => {
                                    setNome(text)
                                }}
                                value={nome}
                            />
                        </View>
                    </View>
                    <View style={styles.inputsContainer}>
                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="mail"
                                placeholder="E-mail"
                                onChangeText={(text) => {
                                    setEmail(text)
                                }}
                                value={email}
                            />
                        </View>

                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="smartphone"
                                placeholder="Telefone"
                                onChangeText={(text) => {
                                    setTelefone(text)
                                }}
                                value={telefone}
                            />
                        </View>
                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="watch"
                                placeholder="Horário de atendimento"
                                onChangeText={(text) => {
                                    setHorarioAtendimento(text)
                                }}
                                value={horarioAtendimento}
                            />
                        </View>

                        <View style={styles.inputText}>
                            <FtsTextBox
                                color="red"
                                iconName="house"
                                placeholder="Endereço"
                                onChangeText={(text) => {
                                    setEndereco(text)
                                }}
                                value={endereco}
                            />
                        </View>

                        <View style={styles.inputsRow}>
                            <Picker
                                style={styles.picker}
                                selectedValue={uf}
                                onValueChange={(itemValue, itemIndex) => {
                                    setUf(itemValue)
                                }}
                            >
                                <Picker.Item label="AC" value="AC" />
                                <Picker.Item label="AL" value="AL" />
                                <Picker.Item label="AP" value="AP" />
                                <Picker.Item label="AM" value="AM" />
                                <Picker.Item label="BA" value="BA" />
                                <Picker.Item label="CE" value="CE" />
                                <Picker.Item label="DF" value="DF" />
                                <Picker.Item label="ES" value="ES" />
                                <Picker.Item label="GO" value="GO" />
                                <Picker.Item label="MA" value="MA" />
                                <Picker.Item label="MT" value="MT" />
                                <Picker.Item label="MS" value="MS" />
                                <Picker.Item label="MG" value="MG" />
                                <Picker.Item label="PA" value="PA" />
                                <Picker.Item label="PB" value="PB" />
                                <Picker.Item label="PR" value="PR" />
                                <Picker.Item label="PE" value="PE" />
                                <Picker.Item label="PI" value="PI" />
                                <Picker.Item label="RJ" value="RJ" />
                                <Picker.Item label="RN" value="RN" />
                                <Picker.Item label="RS" value="RS" />
                                <Picker.Item label="RO" value="RO" />
                                <Picker.Item label="RR" value="RR" />
                                <Picker.Item label="SC" value="SC" />
                                <Picker.Item label="SP" value="SP" />
                                <Picker.Item label="SE" value="SE" />
                                <Picker.Item label="TO" value="TO" />
                            </Picker>

                            <View style={styles.inputText}>
                                <FtsTextBox
                                    color="red"
                                    iconName="map"
                                    placeholder="Cidade"
                                    onChangeText={(text) => {
                                        setCidade(text)
                                    }}
                                    value={cidade}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContent}>
                        <View>
                            <View style={styles.button}>
                                <FtsButton text="Salvar" onPress={SalvarLocal} />
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
