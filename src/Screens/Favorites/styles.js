import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingLeft: 10,
        alignItems: 'stretch',
        height: 100,
        width: '100%',
        backgroundColor: "#777",
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
        width: '90%',
        backgroundColor: '#F9C84E',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default styles;
