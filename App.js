import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useFonts } from "expo-font"

import Paciente from "./src/screens/Paciente.js"
import Clinica from './src/screens/Clinica.js'

const Stack = createNativeStackNavigator()

export default function App() {


  const [fonteCarregada] = useFonts({
    "Roboto": require("./assets/fonts/Roboto-Regular.ttf")
  })
  if (fonteCarregada)
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Clinica" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Clinica" component={Clinica} />
          <Stack.Screen name="Paciente" component={Paciente} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

