import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',    
        padding: 10,
        height: 640,
        width: '100%',
        backgroundColor: "#777",
        bottom: 10,
    },
    card_template: {
        width: '100%',
        height: 600,
        boxShadow: "10px 10px 17px -12px #000000c0",
        alignItems: 'center'
    },
    card_image: {
        height: 600,
        width: '100%',
        objectFit: 'fill',        
        borderRadius: 10,
        maxWidth: '100%',
    },
    text_container: {
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 30,
        bottom: 0,
        backgroundColor: "#333333",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
     
    },
    card_title: {
        fontFamily: "Montserrat",
        color: "white",
        fontSize: 15,
        textAlign: "center",
        
    },
  
});

export default styles;
