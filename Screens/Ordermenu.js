import React from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native' 
import { Something, Recommended } from '../Components/CategoryCard/Cardlist'
import { Ionicons } from '@expo/vector-icons'

const images = Something.image
export const OrderMenu = ({navigation}) => {
  return (
    <View style={styles.container1}>
      <View style={styles.container0}>
        <ImageBackground source={require('../assets/images/pasta.jpg')} style={ styles.image }/>
        <TouchableOpacity onPress={() => navigation.replace('Home') }>
          <Ionicons name='arrow-back' size={45} color='white' style={styles.icon }/>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}> Pasta </Text>
        <Text style={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Text style = {styles.textHeader}> Choose Addition </Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: '100%',
    paddingTop: '4%'
  },
  container0: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
  },
  container2: {
    marginTop: 15,
    marginHorizontal: 25,
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain'
  },
  icon: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  text: {
    color: '#f08300',
    fontSize: 40
  },
  text2: {
    lineHeight: 30,
    fontSize: 16,
    textAlign: 'justify',
    paddingLeft:10,
    color: '#282C35',
    paddingBottom: 30
  },
  textHeader: {
    fontSize: 24,
    color: '#282C35',
    lineHeight: 30,
  },
});
