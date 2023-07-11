import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import css from './style';

/***
 * Exempo usando funções  e useState
 */

export default ({ inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => { setNumero(numero + passo ) }
    const dec = () => { setNumero(numero - passo) }

    return (
        <>
            <View style={css.container}>
                <View style={css.visor}>
                    <Text>{numero}</Text>
                </View>
                <View style={css.button}>
                    <Button onPress={inc} title="+"/>
                </View>
                <View style={css.button}>
                    <Button onPress={dec} title="-" />
                </View>
            </View>
        </>
    )
}