import React, { useState } from "react";
import { Text, Button, View, TextInput } from "react-native";
import css from './style';

/***
 * Exempo usando funções  e useState
 */

export default function Ube() {
    const [corrida, setCorrida] = useState(10)
    const [recebido, setRecebido] = useState(8)
    const [rs, setRs] = useState()

    function calc() {
        setRs(corrida - recebido)
    }

    return (
        <View  style={css.container}>
            <View style={css.title}>
                <Text>App Uber</Text>
            </View>

            <View style={css.title}>
               <Text> {rs} </Text>
            </View>

            <View style={css.main}>
                <View style={css.inputGroup}>
                    <Text style={css.text} > Valor da Corrida</Text>
                    <View style={css.visor}>
                        <TextInput
                            value={corrida}
                            placeholder={'Valor da Corrida'}
                            onChange={ e => setCorrida(e.target.value)}
                        />
                    </View>
                </View>

                <View style={css.inputGroup}>
                    <Text style={css.text}> Valor Recebido</Text>
                    <View style={css.visor}>
                        <TextInput
                            value={recebido}
                            placeholder={'Valor Recebido'}
                            onChange={ e => setRecebido(e.target.value) }
                        />
                    </View>
                </View>
            </View>

            <View style={css.button}>
                <Button onPress={calc} title="Calcular" />
            </View>
        </View>
    )
}