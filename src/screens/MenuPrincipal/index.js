
import React from 'react'
import { StyleSheet, View } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'

export default function MenuPrincipalcreen() {
    return (
        <FtsBackground>
            <View style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Pessoa" />
                        </View>
                    </View>
                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Estabelecimento" />
                        </View>
                    </View>
                </View>
            </View>
        </FtsBackground>
    )
}

const styles = StyleSheet.create({
    containerContent: {
        flex: 1,
        alignItems: 'center',
    },
    logoContainer: { flex: 1 },
    buttonsContainer: { flex: 2, marginTop: 100 },
    button: { marginVertical: 10 },
})

/*import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { StyleSheet } from 'react-native'

//Vai chamar esta tela ao clicar em estabelecimento
export default function SobreScreen({ route, navigation }) {
    return (
                
     /////////////////////////////////
        <View style={styles.container}>
         <Text>Menu MenuPrincipal</Text>

              <View style={styles.button}>
                    <Button
                title="Entrar"
                        onPress={() => {
                            navigation.navigate('Home')
                        } } />
                </View>
                <View style={styles.button}>
                    <Button title="Voltar" onPress={() => navigation.goBack()} />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1c0e4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        margin: 10,
    },
})
*/