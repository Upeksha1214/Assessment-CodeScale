/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import Profile from './src/screen/Profile';
import Welcome from './src/screen/Welcome';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  Welcome: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor: '#2A2A2A',
        headerStyle: { backgroundColor: '#2A2A2A' },  
      }}>
        <Stack.Screen
          name='Login'
          component={Login}
          
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          
        />

        <Stack.Screen
          name='Welcome'
          component={Welcome}
          
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
