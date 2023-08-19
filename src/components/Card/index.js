import { Image, Pressable, Text, View, } from "react-native";
import React, { useState } from 'react';

import { useNavigation } from "@react-navigation/native";

import styles from './styles';

export default function Card(movie) {
  const navigation = useNavigation();
  
  const movieItem = movie.movie
    ? movie.movie
    : { banner: "../../assets/icon.png", title: "Não definido" };

  const image = movieItem.banner
    ? { uri: '../' + movieItem.banner }
    : { uri: "../../assets/icon.png" };

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

