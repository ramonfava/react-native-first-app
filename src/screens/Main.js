import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

const Stack = createNativeStackNavigator();

/** Main file with routes */
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, headerLeft: () => null }}
        />
        <Stack.Screen
          name="Character List"
          component={CharacterList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Character Details"
          component={CharacterDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
