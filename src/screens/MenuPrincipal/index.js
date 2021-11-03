import React, { useEffect } from 'react'
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
