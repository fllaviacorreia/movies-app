import { ImageBackground, Text, Pressable, View, ToastAndroid} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styles from './styles';
import React from "react";
import { FavoritesContext } from '../../context';
import images from "../../img";

export default function DetailsScreen() {
    const { details, onSaveFavorite } = React.useContext(FavoritesContext);

    const navigation = useNavigation();

    async function handleFavorite() {
        try {
            await onSaveFavorite({newMovie: details});
            ToastAndroid.show("Filme favoritado com sucesso!", ToastAndroid.SHORT);
            navigation.navigate('Filmes');
        } catch (error) {
            console.log(error);
            ToastAndroid.show("Ocorreu um erro ao favoritar o filme.", ToastAndroid.LONG);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={images[details.idLocal]} resizeMode="cover" style={styles.image}>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}> {details.title} </Text>
                    <Text style={styles.text}> {details.sinopse} </Text>
                    <Text style={styles.text}> IMDB: {details.imdb} </Text>
                    <Text style={styles.text}> Lançamento: {details.lancamento} </Text>
                    <View style={styles.containerButton}>
                        <Pressable style={styles.button} onPress={handleFavorite}>
                            <Text style={styles.textButton}>
                                Favoritar
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}
