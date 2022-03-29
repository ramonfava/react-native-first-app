import * as React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';

/** Captcha component */
const Captcha = ({ valid, setValid }) => {
  const [values, setValues] = React.useState({ x: 0, y: 0, sum: 0 });
  const [input, setInput] = React.useState(`Captcha: ${values.x} + ${values.y} = `);

  React.useEffect(() => {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    const sum = x + y;
    setValues({
      x, y, sum,
    });
    setInput(`Captcha: ${x} + ${y} = `);
  }, []);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={input}
        onChangeText={(text) => {
          const staticInfo = `Captcha: ${values.x} + ${values.y} = `;
          const value = text.replace(staticInfo, '');
          setInput(staticInfo + value);
          const checkSum = parseInt(values.x, 10) + parseInt(values.y, 10) === parseInt(value, 10);
          setValid({ ...valid, captcha: checkSum });
        }}
      />
    </View>
  );
};

export default Captcha;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  textInput: {
    width: '100%',
    marginLeft: 4,
    borderColor: '#777777',
    borderWidth: 3,
    borderRadius: 16,
    marginVertical: 8,
    fontSize: 20,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingLeft: 16,
  },
});
