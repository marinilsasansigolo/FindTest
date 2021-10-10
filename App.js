<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TextBox from './src/components/TextBox'

export default function App() {
    return <View></View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7B68EE',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
=======

import React from  'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text} from 'react-native';

export default function App(){
  return (
<<<<<<< HEAD
    <KeyboardAvoidingView style = {styles.background}>
    <View style = {styles.containerLogo}>
    <Image
     source={require('./src/assets/logo.png')}
     />
   </View>
    
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autocorrect={False}
        onChangedText = {()=>{}}
      />
      </View>

      <View>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        autocorrect={False}
        onChangedText = {()=>{}}
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
=======
    <View style={styles.container}>
      <Text>COLABORADORES!</Text>
      <Text>MARINILZA!</Text>
      <Text>ALEXANDRO!</Text>
      <StatusBar style="auto" />
    </View>
  );
>>>>>>> 22fd82a51d8f3c3cc25715a3cb6b1b4079da08de
}

    const styles = StyleSheet.create({
      background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#08B6CB'
      },

      containerLogo:{
        flex:1,
        justifyContent: 'center',
      
      },

      container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
      },

      input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
      },

      btnSubmit:{
        backgroundColor:'#35AAFF',
        width: '90%',
        heigth: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
      },

  submitText:{
    color: '#FFF',
    fontSize:18
  },

  btnRegister:{
    marginTop: 10,
  },

  registerText:{
    color:'#FFF'
  }


});
>>>>>>> 5908c5f4785f7dcad75f91db8566828a53744ad6
