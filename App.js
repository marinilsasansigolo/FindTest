import React from 'react'
import {
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity,
    Text,
} from 'react-native'

export default function App() {
    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Image source={require('./assets/logo.png')} />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autocorrect={false}
                    onChangedText={() => {}}
                />
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autocorrect={false}
                    onChangedText={() => {}}
                />

                <TouchableOpacity style={styles.btnSubmit}>
                    <Text style={styles.btnSubmit}> Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08B6CB',
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },

    input: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },

    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        // heigth: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },

    submitText: {
        color: '#FFF',
        fontSize: 18,
    },

    btnRegister: {
        marginTop: 10,
    },

    registerText: {
        color: '#FFF',
    },
})