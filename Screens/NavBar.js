import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './Home'
import Favourites from './Favourites'
import { Profile } from './Profile'
import { StyleSheet } from 'react-native'
import { OrderMenu } from './Ordermenu'
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'

const Tab = createBottomTabNavigator()
const OrderStack = createStackNavigator()

const HomeTabs = () => (
      <Tab.Navigator
            tabBarOptions={{activeTintColor :'#f08300', activeBackgroundColor: 'white', 
            style: {
                height: 68,
                backgroundColor: '#dee3de',
                marginBottom: 0,
                paddingBottom: 2,
              },
            }}
          shifting={true}
        >
          <Tab.Screen
            name="Home"
            component={Home} 
              options={{ 
              tabBarIcon: ({ focused }) => (
                <AntDesign name="home" color={focused? '#f08300': 'grey'} size={26} />
              ), tabBarVisible :true
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Favourites}
              options={{ 
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name="cart-outline" color={focused? '#f08300': 'grey'}  size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ 
              tabBarIcon: ({ focused }) => (
                <FontAwesome name="user-o" color={focused? '#f08300': 'grey'}  size={30 }  />
              ),
            }}
          />
        </Tab.Navigator>
  )
export const NavBar = () => {
  return (
      <OrderStack.Navigator>
            <OrderStack.Screen name = "Home" component = {HomeTabs} options = {{header:()=> null}} />
            <OrderStack.Screen name = "OrderMenu" component = {OrderMenu} options = {{header:()=> null}}/>
        </OrderStack.Navigator>
  )
}

      
    
