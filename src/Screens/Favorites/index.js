import React from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList, Text, Pressable } from 'react-native';

import styles from './styles';

export default function FavoritesScreen() {
  const [movies, setMovies] = React.useState([]);

  const { getItem, setItem } = useAsyncStorage("@moviemingle:favorites");

  async function handleFetchData() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setMovies(data);
  }

  async function handleRemoveMovie(id) {
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter(movie => movie.id !== id);

    await setItem(JSON.stringify(data));

    setMovies(data);
  }

  useFocusEffect(React.useCallback(() => {
    handleFetchData();
  }, []));


  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <Pressable style={styles.button} onPress={() => handleRemoveMovie(item.id)}>
              <Text style={styles.text}>
                Desfavoritar
              </Text>
            </Pressable>
          </View>
        }
      />
    </View>
  )
}