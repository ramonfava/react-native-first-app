import * as React from 'react';
global.Buffer = global.Buffer || require('buffer').Buffer;
import btoa from 'btoa';
import { Text, View, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import NavigationButton from '../components/NaviagtionButton';
import detailAPI from '../services/finalSpaceAPI';

const ImageDetail = require('../assets/images/Detail.jpg');

/** Character Details page */
const Details = ({ navigation, route }) => {
  const [character, setCharacter] = React.useState(route.params.item);
  const [myImage, setMyImage] = React.useState('');

  React.useEffect(() => {
    let temp = route.params.item.img_url.split('/');
    temp = temp.pop();
    detailAPI(temp, {
      responseType: 'arraybuffer',
    }).then((response) => {
      const base64 = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      setMyImage(base64);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={ImageDetail}
    >
      <ScrollView style={styles.scrollView} >
        <View style={styles.viewImage}>
          <Image
            source={{ uri: `data:image/png;base64,${myImage}` }}
            style={styles.image}
          />
        </View>
        <Text style={styles.description}>{`NAME: ${character.name}`}</Text>
        <Text style={styles.description}>{`STATUS: ${character.status}`}</Text>
        <Text style={styles.description}>{`SPECIES: ${character.species}`}</Text>
        <Text style={styles.description}>{`GENDER: ${character.gender}`}</Text>
        <Text style={styles.description}>{`HAIR: ${character.hair}`}</Text>
        <Text style={styles.description}>{`ALIAS: ${character.alias.join('\n')}`}</Text>
        <Text style={styles.description}>{`ORIGIN: ${character.origin}`}</Text>
        <Text style={styles.description}>{`ABILITIES: ${character.abilities.join('\n')}`}</Text>
      </ScrollView>
      <NavigationButton
        title="Go Back"
        screen="Character List"
        navigation={navigation}
        // disabled={isBtnDisabled}
        disabled={false}
      />
    </ImageBackground>
  );
};

export default Details;

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
  },
  scrollView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: 4,
    borderRadius: 12,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    flex: 1,
  },
  viewImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderColor: 'black',
    borderWidth: 2,
    height: 250,
    width: 300,
  },
  description: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    margin: 8,
  },
});
