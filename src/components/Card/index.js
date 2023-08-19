import { Pressable, Text, View, } from "react-native";
import { Image } from 'expo-image';
import React from 'react';

import { useNavigation } from "@react-navigation/native";

import styles from './styles';

export default function Card(movie) {
  const navigation = useNavigation();
  
  const movieItem = movie.movie
    ? movie.movie
    : { banner: "../../assets/icon.png", title: "Não definido" };

  const image = JSON.stringify(movieItem.banner)

  //go to details page
  const navigateDetails = () => {
    navigation.navigate('Detalhes', { movie: movieItem });
  };

  return (
    <Pressable style={styles.container} onPress={navigateDetails}>
      <View style={styles.card_template}>
        <Image style={styles.card_image} source={image} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.card_title}>{movieItem.title}</Text>
      </View>
    </Pressable>
  );
}

