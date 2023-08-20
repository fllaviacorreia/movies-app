import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
        height: 600,
        width: 320,
    },
    card_template: {
        width: 320,
        height: 600,
        boxShadow: "10px 10px 17px -12px #000000c0",
    },
    card_image: {
        height: 600,
        width: 400,
        objectFit: 'fill',
        borderRadius: 10,
        maxWidth: '100%',
    },
    text_container: {
        position: "absolute",
        width: 320,
        height: 30,
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
        fontSize: 15,
        textAlign: "center",
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
  
});

export default styles;
