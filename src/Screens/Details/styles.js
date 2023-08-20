import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    containerInfo:{
        height: '100%',
        width: '100%',
        backgroundColor: '#000000c0',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 'auto',
    },
    containerButton:{
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'Montserrat',
        padding: 20,
    },
    text: {
        color: 'white',
        fontSize: 17,
        lineHeight: 35,
        fontWeight: 'normal',
        textAlign: 'justify',
        fontFamily: 'Open-Sans',
        padding: 20,
    },
    button:{
        color: 'white',
        width: "90%",
        backgroundColor: '#E74C3C',
        borderRadius: 10,
        padding: 10,
    },
    textButton:{
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },

});

export default styles;
