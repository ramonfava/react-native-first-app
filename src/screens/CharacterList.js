import * as React from 'react';
import {
  FlatList, ImageBackground, TextInput, StyleSheet,
  Text, TouchableOpacity, View,
} from 'react-native';
import FilterButton from '../components/FilterButton';

const search = require('../assets/images/Search.jpg');
const myData = require('../assets/data/CharactersData');

/** Show Final Space characters' name */
const CharacterList = ({ navigation }) => {

  const [myList, setMyList] = React.useState(myData.default);
  const [filter, setFilter] = React.useState('');

  /** Go to Details' page with information about chosen character */
  const goToDetail = (item) => {
    navigation.navigate('Character Details', { screen: 'CharacterDetails', item: item });
  };

  /** Sort ascending */
  function asc() {
    const temp = [...myList];
    temp.sort((a, b) => a.name.trim() > b.name.trim());
    setMyList(temp);
  }

  /** Sort descending */
  function desc() {
    const temp = [...myList];
    temp.sort((a, b) => a.name.trim() < b.name.trim());
    setMyList(temp);
  }

  /** Go to details' page for a random character */
  function characterAtRandom() {
    const random = Math.floor(Math.random() * 47) + 1;
    goToDetail(myList[random]);
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity onPress={() => goToDetail(item)}>
          <Text style={styles.listItemContent}>{`${item.name}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={search}
    >
      <View style={styles.mainView}>
        <FilterButton
          onAsc={asc}
          onDesc={desc}
          onRandom={characterAtRandom}
        />
        <TextInput
          style={styles.textInput}
          placeholder="FILTER"
          value={filter}
          onChangeText={(test) => {
            if (!test) {
              setMyList(myData.default);
            } else {
              const temp = myList.filter((l) => {
                return l.name.toLowerCase().trim().includes(test.toLowerCase());
              });
              setMyList(temp);
            }
            setFilter(test);
          }}
        />
        <FlatList data={myList} renderItem={(item) => {
          return (renderItem(item));
        }} />
      </View>
    </ImageBackground>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
  },
  mainView: {
    flex: 1,
    padding: 32,
  },
  listItem: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: 4,
    borderRadius: 12,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    justifyContent: 'center',
  },
  listItemContent: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    margin: 8,
    textAlign: 'center',
  },
  textInput: {
    color: 'black',
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});
