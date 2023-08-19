import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginLeft: 10,
        alignItems: 'center',
        height: 30,
    },
    title: {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 20,
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center',
        fontFamily: 'Open-Sans',
        padding: 5,
    },
    button: {
        color: 'white',
        width: 250,
        backgroundColor: '#F9C84E',
        borderRadius: 10,
        textAlign: 'center',
    },
});

export default styles;
