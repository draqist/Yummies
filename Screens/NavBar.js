import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome,Ionicons,MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Home } from './Home'
import { Search } from './Search'
import Favourites from './Favourites'
import { Profile } from './Profile'
import { StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'
const Tab = createBottomTabNavigator()

export const NavBar = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 60,
            fontSize: 30
          },
        }}
        shifting = {false}
        barStyle={{ backgroundColor: '#05375a' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
          options={{ 
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Favourites}
          options={{ 
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ 
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={30 }  />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
})