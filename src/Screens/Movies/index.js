import React from 'react';
import { FlatList, View } from 'react-native';
import Card from '../../components/Card';
import styles from './styles';
import data from '../../../assets/data/data.json';

export default function MoviesScreen() {
  const movies = data.data;
  return (
      <View style={styles.container}>
        <FlatList
          data={movies}
          keyExtractor={item => item.idLocal}
          renderItem={item => <Card movie={item} />}
        />
      </View>

  );
}