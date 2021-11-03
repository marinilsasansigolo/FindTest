import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Company(props) {
    return (
        <View style={styles.companyCard}>
            <View style={styles.companyCardRow}>
                <View>
                    <Image
                        style={styles.companyImage}
                        source={require('../../../assets/company.png')}
                    />
                </View>
                <View>
                    <Text style={[styles.companyText, styles.companyTextTitle]}>
                        {props.dados.nome}
                    </Text>
                    <Text style={styles.companyText}>{props.dados.atendimento}</Text>
                    <Text style={styles.companyText}>{props.dados.telefone}</Text>
                    <Text style={styles.companyText}>{props.dados.email}</Text>
                </View>
            </View>

            <View style={styles.companyCardAddress}>
                <Text style={styles.companyText}>{props.dados.endereco}</Text>
                <Text style={styles.companyText}>
                    {props.dados.cidade} - {props.dados.uf}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    companyCard: {
        borderColor: '#fff',
        borderWidth: 0.5,
        marginBottom: 17,
        padding: 7,
    },
    companyCardRow: {
        flexDirection: 'row',
        padding: 7,
    },
    companyImage: {
        marginRight: 7,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 15,
    },

    companyText: {
        fontSize: 15,
        color: '#74A0B4',
    },
    companyTextTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    companyCardAddress: {
        alignItems: 'center',
    },
})
