import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome, SignUp, LogIn } from './Screens/LogIn'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }} />
      <Stack.Screen name="LogIn" component={LogIn} options={{ header: () => null }} />
      <Stack.Screen name = "SignUp" component= {SignUp} options={ { header: () => null }}   />
    </Stack.Navigator>
  </NavigationContainer>
)

