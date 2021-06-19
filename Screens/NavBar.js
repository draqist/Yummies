import React from 'react'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons'

import { Home } from './Home'
import { Search } from './Search'
import Favourites from './Favourites'
import { Profile } from './Profile'

const Tab = createMaterialBottomTabNavigator()

export const NavBar = () => {
    return (
      <Tab.Navigator
        labeled={false}
        shifting = {true}
        activeColor="orange"
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
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bookmark-o" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}