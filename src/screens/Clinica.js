import React, { useEffect, useState } from "react"
import { StatusBar } from "expo-status-bar"
import { Text } from "react-native"

import Tela from "../components/Tela.js"
import Navegacao from "../components/Navegacao.js"
import Janela from "../components/Janela.js"

import Carregar from "../functions/Carregar.js"

export default function Clinica({ navigation }) {
    const [resultados, definirResultado] = useState({})

    useEffect(function () {
        Carregar()
            .then(function (dados) {
                dados.map((dado) => {
                    definirResultado(dado)
                })

                // const valido = JSON.parse(dados || "{}")
                // definirResultado(valido)
            })
            .catch(function (erro) {
                alert(erro)
            })
    }, [resultados])

    return <Tela>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Navegacao navigation={navigation} />
        {Object.keys(resultados).length > 0 &&
            <Janela>
                <Text style={{ fontFamily: "Roboto", fontSize: 18, marginBottom: 8 }}>
                    {resultados.nome}
                </Text>
                <Text style={{ fontFamily: "Roboto" }}>
                    {resultados.horario}
                </Text>
                <Text style={{ fontFamily: "Roboto" }}>
                    {resultados.categoria}
                </Text>
            </Janela>
        }
    </Tela>
}