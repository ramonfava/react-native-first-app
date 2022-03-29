import * as React from 'react';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const FilterButton = ({ onAsc, onDesc, onRandom }) => {

  return (
    <Animatable.View animation="shake">
      <View style={styles.mainTheme}>
        <Pressable
          style={styles.btn}
          onPress={onAsc}
        >
          <Text style={styles.textButton}>
            ASC
          </Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={onDesc}
        >
          <Text style={styles.textButton}>
            DESC
          </Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={onRandom}
        >
          <Text style={styles.textButton}>
            RANDOM
          </Text>
        </Pressable>
      </View>
    </Animatable.View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  mainTheme: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    height: 50,
    width: 100,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomColor: 'gray',
    borderRightColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
