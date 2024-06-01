import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font"


export default function App() {
  const Stack = createNativeStackNavigator()

  const [fonteCarregada] = useFonts({
    "Roboto": require("./assets/fonts/Roboto-Regular.ttf")
  })
  if (fonteCarregada)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Clinica" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Clinica" component={ }/>
          <Stack.Screen name="Paciente" component={ }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

