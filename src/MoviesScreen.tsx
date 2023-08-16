import { Text, View } from 'react-native';

import ModalMovie from './Modal';

export default function MoviesScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <ModalMovie/>
      </View>
    );
  }