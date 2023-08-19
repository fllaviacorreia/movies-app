import { ImageBackground, Text, Pressable, View, } from "react-native";
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

    const { getItem, setItem } = useAsyncStorage("@moviemigle:favorites");

    const [movieFromStorage, setMovieFromStorage] = React.useState(false);

    async function handleFavorite() {
        try {
            const id = uuid.v4();

            //get data in Async Storage
            const response = await getItem();
            const previousData = response ? JSON.parse(response) : [];
           
            const filteredData = previousData.filter(item => item.idLocal !== movieFromRoute.idLocal);
            
            const data = [...filteredData, {id, ...movieFromRoute}];

            // save Data in Async Storage
            await setItem(JSON.stringify(data));

            Toast.show({
                type: "success",
                text1: "Filme favoritado!"
            });

            navigation.navigate('Filmes');

        } catch (error) {
            console.log(error);
            Toast.show({
                type: "error",
                text1: "Ocorreu um erro ao completar a ação."
            });
        }
    }


    // function to know if has a movie in storage
    async function handleGetMovie() {
        //get Data in Async Storage
        const response = await getItem();
        const previousData = response ? JSON.parse(response) : [];

        const movie = previousData.filter(item => item.idLocal === movieFromRoute.idLocal);

        movie.length > 0 ? setMovieFromStorage(true) : setMovieFromStorage(false);
    }

    useFocusEffect(React.useCallback(() => {
        handleGetMovie();
      }, []));


    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
                        {
                            movieFromStorage
                                ?
                                <Pressable style={styles.buttonInactive} disabled>
                                    <Text style={styles.text}>
                                        Favoritar
                                    </Text>
                                </Pressable>
                                :
                                <Pressable style={styles.button} onPress={handleFavorite}>
                                    <Text style={styles.text}>
                                        Favoritar
                                    </Text>
                                </Pressable>
                        }

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
