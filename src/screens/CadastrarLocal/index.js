import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import FtsTextBox from '../../components/FtsTextBox'
import FtsHeaderBar from '../../components/FtsHeaderBar'

export default function LoginScreen({ navigation }) {
    return (
        <FtsBackground>
            {/* <View style={styles.headerBar}>
                <FtsHeaderBar navigation />
            </View> */}

            <KeyboardAvoidingView behavior="padding" style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            // style={styles.inputText}
                            color="red"
                            iconName="people"
                            placeholder="Nome"
                        />
                    </View>
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            // style={styles.inputText}
                            color="red"
                            iconName="mail"
                            placeholder="E-mail"
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>

            <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            // style={styles.inputText}
                            color="red"
                            iconName= "telephone-accessible"
                            placeholder="Telefone"
                        />
                    </View>
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                            // style={styles.inputText}
                            color="red"
                            iconName="watch"
                            placeholder="Horário de atendimento"
                        />
                    </View>
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
                     
                            color="red"
                            iconName="house"
                            placeholder="Endereço"
                        />
                    </View>
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
               
                            color="red"
                            iconName="mail"
                            placeholder="UF"
                        />
                    </View>
                </View>

                <View style={styles.inputsContainer}>
                    <View style={styles.inputText}>
                        <FtsTextBox
        
                            color="red"
                            iconName="map"
                            placeholder="Cidade"
                        />
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
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 2,
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
        flex: 1,
        justifyContent: 'center',
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
