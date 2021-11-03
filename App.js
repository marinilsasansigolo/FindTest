import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './src/screens/Home'
import LoginScreen from './src/screens/Login'
import SignUpScreen from './src/screens/SignUp'
import SplashScreen from './src/screens/Splash'
import PrincipalScreen from './src/screens/Principal'
import HeaderBackButton from './src/components/FtsHeaderBackButton'

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
                    name="PesquisarLocal"
                    component={PrincipalScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Principal"
                    component={PrincipalScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
