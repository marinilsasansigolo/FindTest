import React from 'react'
import { StyleSheet, View } from 'react-native'
import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'
import React, { BackHandler } from 'react-native';

export default function LoginScreen({navigation}) {
    return (
        <FtsBackground>
            <View style={styles.containerContent}>
                <View style={styles.logoContainer}>
                    <FtsLogo />
                </View>

                <View style={styles.buttonsContainer}>
                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Cadastrar Local"
                                 onPress={() => {navigation.navigate('CadastrarLocal')}} />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Pesquisar Local"
                                 onPress={() => {navigation.navigate('PesquisarLocal')}} />
                        </View>
                    </View>
             
                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Menu Principal"
                                 onPress={() => {navigation.navigate('Home')}} />
                        </View>
                    </View>

                    <View>
                        <View style={styles.button}>
                            <FtsButton text="Sair"
                            //BackHandler.exitApp();

                        onPress={() => {navigation.navigate('Home')}}
                                  />
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

