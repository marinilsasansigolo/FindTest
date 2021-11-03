import React  from 'react'
import { View, Text,StyleSheet } from 'react-native'
import FtsButton from '../../components/FtsButton'
import FtsBackground from '../../components/FtsBackground'
import FtsLogo from '../../components/FtsLogo'

export default function LoginScreen() {
    return (
        <FtsBackground>
            <View style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>
                <View style={styles.buttonsContainer}>
                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Entrar" />
                        </View>
                    </View>
                    <View>
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

//Vai chamar esta tela ao clicar em estabelecimento
/*export default function SobreScreen({ route, navigation }) {
    return (
        
        <FtsBackground>
        <View style={styles.container}>
              <View style={styles.button}>
                    <Button title="Entrar"
                        onPress={() => {
                            navigation.navigate('MenuPrincipal')
                        } } />
                </View>
                <View style={styles.button}>
                    <Button title="Voltar" onPress={() => navigation.goBack()} />
                </View>
            </View>
        </FtsBackground>
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