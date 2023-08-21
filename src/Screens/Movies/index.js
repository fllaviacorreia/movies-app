import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import data from '../../../assets/data/data.json';
import Card from '../../components/Card';

import styles from './styles';

export default function MoviesScreen() {
  const [movies, setMovies] = useState(Object);

  useEffect(() => { setMovies(data.data); }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item=>item.idLocal}
        renderItem={({ item }) => <Card movie={item}/>}
      />
    </View>
  );
}