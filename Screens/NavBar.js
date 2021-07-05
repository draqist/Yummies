import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './Home'
import Favourites from './Favourites'
import { Profile } from './Profile'
import { StyleSheet } from 'react-native'
import { OrderMenu } from './Search'
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view'

const Tab = createBottomTabNavigator()
const OrderStack = createStackNavigator()

const OrderStackScreen = () => (
  <OrderStack.Navigator >
      <OrderStack.Screen name = "Home" component = {Home} options = {{header:()=> null}} />
      <OrderStack.Screen name = "OrderMenu" component = {OrderMenu} options = {{header:()=> null}}/>
  </OrderStack.Navigator>
)

export const NavBar = () => {
  return (
      
      <Tab.Navigator
        tabBarOptions={{activeTintColor :'#f08300', 
        style: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            height: 65,
            backgroundColor: '#dee3de',
            paddingBottom: 5,
            color: '#dee3de',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        }}
        shifting = {true}
    >
      <Tab.Screen
        name="Home"
        component={OrderStackScreen}
          options={{ 
          tabBarIcon: ({ focused }) => (
            <AntDesign name="home" color={focused? '#f08300': 'grey'} size={26} />
          ),
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
}

const styles = StyleSheet.create({
})