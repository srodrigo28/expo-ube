import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
        backgroundColor: 'darkviolet'
    },
    main: {
        gap: 10,
        display: "flex",
        flexDirection: "row",
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: -5
    },
    title: {
        backgroundColor: '#fff',
        width: 200,
        marginBottom: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        padding: 10,
    },
    button: {
        padding: 10,
        width: 200,
        backgroundColor: '#red',
    },
    visor: {
        height: 50,
        width: 120,
        marginBottom: 20,
        backgroundColor: '#fff',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

