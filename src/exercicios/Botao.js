import React from "react";
import { Button } from "react-native";

export default props => {
    function executar() {
        console.log('Exec!!!')
    }

    return (
        <>
            <Button
                title="Executar #01"
                onPress={executar}
            />

            <Button
                title="Executar #02"
                onPress={function () {
                    let a = 20
                    let b = 30
                    let soma = a + b
                    console.log('Exec #02!!!: ' + soma)
                }}
            />

            <Button
                title="Executar #03"
                onPress={ () => console.log('Exec #03!!!') }
            />
        </>
    )
}