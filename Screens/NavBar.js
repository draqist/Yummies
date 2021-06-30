import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from './Home'
import Favourites from './Favourites'
import { Profile } from './Profile'
import { StyleSheet } from 'react-native'
import { OrderMenu } from './Search'

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
        component={OrderStackScreen}
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