import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Welcome } from './Screens/Welcome'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name = "Welcome" component = { Welcome } options = {{title: 'Welcome Screen'}, {header: ()=> null}} />
    </Stack.Navigator>
  </NavigationContainer>
)

