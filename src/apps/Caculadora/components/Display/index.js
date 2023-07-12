import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    display1: {
        height: 100,
        padding: 8,
        color: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    displayValue2: {
        fontSize: 60,
        color: '#fff',
    }
})

export default props => {
    return (
        <View style={styles.display1}>
            <Text style={styles.displayValue2} numberOfLine={1}>
                {props.value}
            </Text>
        </View>
    )
}