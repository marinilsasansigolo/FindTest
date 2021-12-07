import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/Home'
import LoginScreen from './src/screens/Login'
import SignUpScreen from './src/screens/SignUp'
import SplashScreen from './src/screens/Splash'
import PrincipalScreen from './src/screens/Principal'
import SearchCompanyScreen from './src/screens/SearchCompany'
import CadastrarLocalScreen from './src/screens/CadastrarLocal'
import DadosScreen from './src/screens/Dados'
import EditarLocalScreen from './src/screens/EditarLocal'
import DadosEdicaoScreen from './src/screens/DadosEdicao'
import EditarUsuarioScreen from './src/screens/EditarUsuario'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        leftButtonStyle: {
                            color: '#fff',
                        },
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                        // headerLeft: () => (
                        //     <HeaderBackButton
                        //         onPress={() => {
                        //             navigation.goBack
                        //         }}
                        //     />
                        // ),
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        leftButtonStyle: {
                            color: '#fff',
                        },
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MenuPrincipal"
                    component={PrincipalScreen}
                    HeaderBackButton={{ canGoBack: false }}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="SearchCompany"
                    component={SearchCompanyScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="CadastrarLocal"
                    component={CadastrarLocalScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="Dados"
                    component={DadosScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="DadosEdicao"
                    component={DadosEdicaoScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="EditarLocal"
                    component={EditarLocalScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="EditarUsuario"
                    component={EditarUsuarioScreen}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerTransparent: true,
                        headerShadowVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
