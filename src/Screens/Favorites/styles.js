import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        alignItems: 'stretch',
        height: 300,
        width: '100%',
        backgroundColor: "#777",
    },
    title: {
        fontFamily: "Montserrat",
        color: "white",
        fontSize: 20,
    },
    text: {
        color: 'white',
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
    containerInfo:{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000c0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: "50px",
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        boxShadow: "10px 10px 17px -12px #000000c0",
    },
});

export default styles;
