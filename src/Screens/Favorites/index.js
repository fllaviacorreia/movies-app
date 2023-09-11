import React from 'react';
import { View, FlatList, Text, Pressable, ImageBackground, ToastAndroid } from 'react-native';

import images from '../../img';
import styles from './styles';

import { useFavoritesMovies } from '../../hooks';

export default function FavoritesScreen() {

  const { favorites, onRemoveFavorite } = useFavoritesMovies();

  async function handleRemoveMovie(id) {
    try {
      onRemoveFavorite({ id: id, list: favorites})
      ToastAndroid.show("Filme desfavoritado com sucesso!", ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      ToastAndroid.show("Ocorreu um erro ao desfavoritar o filme.", ToastAndroid.LONG);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <ImageBackground source={images[item.idLocal]} borderRadius={10}>
              <View style={styles.containerInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Pressable style={styles.button} onPress={() => handleRemoveMovie(item.id)}>
                  <Text style={styles.text}>
                    Desfavoritar
                  </Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>
        }
      />
    </View>
  )
}