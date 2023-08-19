import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo:{
        backgroundColor: '#000000c0',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    containerButton:{
        flex: 1,
        backgroundColor: '#000000c0',
        justifyContent: 'center',
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
        fontSize: 15,
        lineHeight: 20,
        fontWeight: 'normal',
        textAlign: 'justify',
        fontFamily: 'Open-Sans',
        padding: 20,
    },
    button:{
        color: 'white',
        width: 250,
        padding: 20,
        backgroundColor: '#E74C3C',
        borderRadius: 10,
        textAlign: 'center',
    },
    buttonInactive:{
        color: 'black',
        width: 250,
        padding: 20,
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        textAlign: 'center',
    },

});

export default styles;
