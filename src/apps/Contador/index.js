import React, { useState } from "react";
import { Text, Button, View } from "react-native";
import css from './style';

/***
 * Exempo usando funções  e useState
 */

export default props => {
    const [numero, setNumero] = useState(props.inicial)

    const inc = () => { setNumero(numero + 1) }
    const dec = () => { setNumero(numero - 1) }

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