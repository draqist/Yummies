import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'

import { Welcome } from './Screens/Welcome'
import { LogIn } from './Screens/LogIn'
import { SignUp } from './Screens/SignUp'

const firebaseConfig = {
  apiKey: "AIzaSyDAsbbK65RmZejzxYcZrPQsUnXE7vQuoSw",
  authDomain: "the-real-tubhub.firebaseapp.com",
  projectId: "the-real-tubhub",
  storageBucket: "the-real-tubhub.appspot.com",
  messagingSenderId: "298434461931",
  appId: "1:298434461931:web:705676392eb2e9815a3eae",
  measurementId: "G-R8XEJZWFWD"
};

firebase.initializeApp(firebaseConfig)

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }} />
      <Stack.Screen name="LogIn" component={LogIn} options={{ header: () => null }} />
      <Stack.Screen name= "SignUp" component = {SignUp} options= {{header: () => null}} />
    </Stack.Navigator>
  </NavigationContainer>
)

