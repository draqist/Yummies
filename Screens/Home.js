import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View ,ScrollView, TextInput, ImageBackground,TouchableOpacity,FlatList, Image, } from 'react-native'
import { Ionicons, FontAwesome, AntDesign, Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { useFonts,
  DoHyeon_400Regular , 
} from '@expo-google-fonts/do-hyeon'
import { ContrailOne_400Regular } from '@expo-google-fonts/contrail-one'
 import {
        CevicheOne_400Regular
    } from '@expo-google-fonts/ceviche-one'
import Card from '../Components/CategoryCard/card'
import CardList from '../Components/CategoryCard/Cardlist'


let userName = 'Abdullah'
export const Home = ({ navigation }) => {
  const loadedFonts = useFonts({
    DoHyeon_400Regular, ContrailOne_400Regular,CevicheOne_400Regular 
  });
  if (!loadedFonts) {
    return <AppLoading />
  } else {
    return (
      // App Container
      <View style={styles.container}>
        <Animatable.View style={styles.mainView}  >
            {/* Header */}
          <View style = {styles.mainHeader}>
            <View style={styles.headerComp}>
            <Text style={styles.text}>  Hello {userName}, </Text>
            <TouchableOpacity onPress={ () => navigation.navigate('Profile')}>
                <Image source = {require('../assets/images/sukuna.png')}  style = {styles.icon1} />
            </TouchableOpacity>
          </View>
            <Animatable.View style={styles.headerSub} >
              <Text style={styles.text1}>What would you like to have today?</Text>
            </Animatable.View>
          {/* Search Bar */}
            <Animatable.View style={styles.searchBar} animation = {'fadeInUp'} delay = {1000}   >
              <Ionicons name='search' color='white' size={20} style={styles.icon} />
              <TextInput placeholder='Search Menu' placeholderTextColor = 'white'   autoCapitalize='none' style={styles.input} />
            </Animatable.View>
        </View>
        </Animatable.View>
        {/* Horizontal scroll category */}
          <Text style={styles.scrollText}>  Something New </Text>  
          <View>
            <FlatList
              data={CardList}
              keyExtractor = {(item)=> {item.index}}
              renderItem={({ item }) => <Card CardList={item} name = {item.name} image = {item.image} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
          </View>

        {/* Recommended Section */}
        <View style = {styles.scrollz}>
          <Text style= {styles.scrollText}>Recommended</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
},
  mainView: {
    borderBottomColor: 'white',
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 0.24,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },
  mainHeader: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  text: {
    fontSize: 29,
    fontFamily: 'DoHyeon_400Regular',
    color: 'lime',
    marginTop: 10,
    
  },
  image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover',
        opacity: 0.8
    },
  text1: {
    fontSize: 16,
    fontFamily: 'ContrailOne_400Regular',
    marginHorizontal: 12,
    color: 'darkgray',
    marginTop: 0,
    paddingTop: 0
  },
  scrollText: {
    fontSize: 30,
    marginTop: 85,
    fontFamily: 'CevicheOne_400Regular',
    color: 'black',
    // lineHeight: 55

  },
  icon: {
    paddingLeft: 5,
    paddingTop: 8
  },
  icon1: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 10
  },
  input: {
        color: 'white',
        flex: 1,
        paddingLeft: 9,
        fontSize: 20,
    },
  headerComp: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  headerSub: {
    flexDirection: 'row'
  },
  searchBar: {
    width: '90%',
    flexDirection: 'row',
    height: 40,
    justifyContent:'center',
    marginVertical: 10,
    borderWidth: 1.2,
    borderColor: 'lime',
    borderRadius: 10,
    backgroundColor: 'lightgray',
  },
  scrollables: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 7,
    flexDirection: 'row'
  },
  scrollz: {
    width: '100%',
    marginTop: 20
  }
  })
