import * as React from 'react';
import {
  Dimensions, ImageBackground, StyleSheet,
  Text, View, KeyboardAvoidingView,
} from 'react-native';
import NavigationButton from '../components/NaviagtionButton';
import Captcha from '../components/Captcha';
import ValidTextInput from '../components/ValidTextInput';

const loginImage = require('../assets/images/Login.jpg');

const screenSizeHeight = Dimensions.get('window').height;

/** Login Page */
const Login = ({ navigation }) => {
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);
  const [valid, setValid] = React.useState({
    email: false, password: false, captcha: false,
  });

  /** Check if email is correct */
  function checkEmail(text) {
    const re = /\S+@\S+\.\S+/;
    const result = re.test(text);
    console.log(result);
    setValid({ ...valid, email: result });
    return result;
  }

  /** Check if password has more than 6 characters */
  function checkPassword(text) {
    const result = text.length > 6;
    setValid({ ...valid, password: result });
    return result;
  }

  /** Enable navigation button */
  React.useEffect(() => {
    setIsBtnDisabled(!(valid.email && valid.password && valid.captcha));
  }, [valid]);

  return (
    <KeyboardAvoidingView behavior="position">
      <View style={styles.mainView}>
        <ImageBackground
          style={styles.imageBackground}
          source={loginImage}
          resizeMode="cover"
        >
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Enter the Final Space!</Text>
          </View>
          <View style={styles.textInputView}>
            <ValidTextInput
              keyboardType="email-address"
              placeholder={'EMAIL'}
              validation={checkEmail}
            />
            <ValidTextInput
              placeholder={'PASSWORD'}
              validation={checkPassword}
            />
            <Captcha
              valid={valid}
              setValid={setValid}
            />
            <NavigationButton
              title="Search"
              screen="Character List"
              navigation={navigation}
              // disabled={isBtnDisabled}
            disabled={false}
            />
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: 'black',
  },
  imageBackground: {
    height: screenSizeHeight,
    padding: 32,
  },
  titleView: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  textInputView: {
    flex: 2,
  },
});
