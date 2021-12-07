import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

export default function FtsSearchBar(props) {
    return (
        <View style={styles.searchContainer}>
            <MaterialIcons style={styles.searchIcon} name="search" />
            <TextInput
                style={styles.searchText}
                placeholder="Pesquisar (nome ou cidade)..."
                autoCapitalize="none"
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderWidth: 0.7,
        borderRadius: 50,
        borderColor: '#707070',
    },
    searchIcon: {
        fontSize: 25,
        marginRight: 8,
        color: '#343434',
    },
    searchText: {
        fontSize: 15,
    },
})
