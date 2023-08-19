import { ImageBackground, Text, Pressable, View, ToastAndroid, } from "react-native";
import Toast from 'react-native-toast-message';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import styles from './styles';
import React from "react";

export default function DetailsScreen({ route }) {
    const movieFromRoute = { ...route.params.movie }
    const image = movieFromRoute.banner;

    const navigation = useNavigation();

    const { getItem, setItem } = useAsyncStorage("@moviemingle:favorites");

    async function handleFavorite() {
        try {
            const id = uuid.v4();

            //get data in Async Storage
            const response = await getItem();
            const previousData = response ? JSON.parse(response) : [];

            const filteredData = previousData.filter(item => item.idLocal !== movieFromRoute.idLocal);

            const data = [...filteredData, { id, ...movieFromRoute }];

            // save Data in Async Storage
            await setItem(JSON.stringify(data));

            ToastAndroid.show("Filme favoritado com sucesso!", ToastAndroid.SHORT);

            navigation.navigate('Filmes');

        } catch (error) {
            console.log(error);           
            ToastAndroid.show("Ocorreu um erro ao favoritar o filme.", ToastAndroid.LONG);

        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: image }} resizeMode="cover" style={styles.image}>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>
                        {movieFromRoute.title}
                    </Text>
                    <Text style={styles.text}>
                        {movieFromRoute.sinopse}
                    </Text>
                    <Text style={styles.text}>
                        IMDB: {movieFromRoute.imdb}
                    </Text>
                    <Text style={styles.text}>
                        Lançamento: {movieFromRoute.lancamento}
                    </Text>
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
    )
}
