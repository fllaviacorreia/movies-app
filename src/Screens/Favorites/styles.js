import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
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
       
        borderRadius: 100,
    },
});

export default styles;
