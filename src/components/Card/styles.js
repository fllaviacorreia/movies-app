import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
    },
    card_template: {
        width: 300,
        height: 400,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    },
    card_image: {
        width: 300,
        height: 400,
        borderRadius: 10,
        objectFit: 'contain',
    },
    text_container: {
        position: "absolute",
        width: 300,
        height: 40,
        bottom: 0,
        padding: 5,
        backgroundColor: "#333333",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
    },
    card_title: {
        fontFamily: "Montserrat",
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        height: 400,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#E74C3C',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontFamily: "Open-Sans",
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default styles;
