import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome } from './Screens/Welcome'
import { LogIn } from './Screens/LogIn'
import {  SignUp } from './Screens/SignUp'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }} />
      <Stack.Screen name="LogIn" component = {LogIn}  options={{header: ()=> null}} />
    </Stack.Navigator>
  </NavigationContainer>
)

