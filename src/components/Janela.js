import React from "react"
import { View } from "react-native"
import estilo from "../styles/JanelaStyle.js"

export default function Janela(props) {
    return <View style={ estilo.janela }> 
        {props.children}
    </View>
}