import React from 'react'
import { StyleSheet, View } from 'react-native'

import FtsLogo from '../../components/FtsLogo'
import { FtsBackground } from '../../components/FtsBackground'
import FtsButton from '../../components/FtsButton'

export default function HomeScreen() {
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
