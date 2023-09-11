import React from 'react';
import { Pressable, Text, View, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FavoritesContext } from "../../context";
import images from "../../img";
import styles from './styles';


export default function Card(movie) {
  const {onSaveDetails} = React.useContext(FavoritesContext);
  const navigation = useNavigation();
  
  const movieItem = movie.movie.item
    ? movie.movie.item
    : { idLocal: 11, banner: "../../../assets/icon.png", title: "Não definido" };

  //go to details page
  function navigateDetails(){
    onSaveDetails({detailsMovie: movieItem});
    navigation.navigate('Detalhes');
  };

  return (
    <Pressable style={styles.container} onPress={navigateDetails}>
      <View style={styles.card_template}>
        <Image style={styles.card_image} source={images[movieItem.idLocal]} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.card_title}>{movieItem.title}</Text>
      </View>
    </Pressable>
  );
}

