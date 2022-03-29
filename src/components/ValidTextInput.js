import * as React from 'react';
import {
  StyleSheet, Text, TextInput,
} from 'react-native';


const ValidTextInput = ({ keyboardType, placeholder, validation }) => {
  const [isValid, setIsValid] = React.useState(false);
  const [input, setInput] = React.useState('');

  return (
    <TextInput
      style={isValid ? styles.textInput : styles.invalidTextInput}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={input}
      onChangeText={(test) => {
        console.log('aqui', validation(test));
        setIsValid(validation(test));
        setInput(test);
      }}
      secureTextEntry={placeholder === 'PASSWORD'}
    />
  );
};

export default ValidTextInput;

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  invalidTextInput: {
    color: 'red',
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
});
