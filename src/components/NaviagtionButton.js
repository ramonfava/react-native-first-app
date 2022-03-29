import * as React from 'react';
import {
  Pressable, StyleSheet, Text, View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const NavigationButton = ({ title, screen, navigation, disabled }) => {

  const goTo = () => {
    navigation.navigate(screen, { screen: screen });
  };

  return (
    <Animatable.View animation="pulse">
      <View>
        <Pressable
          disabled={disabled}
          style={styles.mainTheme}
          onPress={() => goTo()}
        >
          <Text
            style={disabled ? styles.invalidTextButton : styles.textButton}>
            {`${title}`}
          </Text>
        </Pressable>
      </View>
    </Animatable.View>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({
  mainTheme: {
    height: 50,
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
  invalidTextButton: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
});
