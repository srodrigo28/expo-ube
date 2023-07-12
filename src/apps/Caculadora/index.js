import { View, Text, StyleSheet } from "react-native";

export function Calculadora() {
    return (
        <View styles={styles.container}>
            <Text>Hello Calculadora</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})