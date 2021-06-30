import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View ,ScrollView, TextInput, Button, ImageBackground,TouchableOpacity,FlatList, Image, Dimensions, } from 'react-native'
import {  Ionicons  } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import { useFonts,DoHyeon_400Regular } from '@expo-google-fonts/do-hyeon'
import { ContrailOne_400Regular } from '@expo-google-fonts/contrail-one'
 import { CevicheOne_400Regular} from '@expo-google-fonts/ceviche-one'
import {Card, Card2} from '../Components/CategoryCard/card'
import {Something, Recommended} from '../Components/CategoryCard/Cardlist'


let userName = 'Abdullah'
export const Home = ({ navigation }) => {
  const loadedFonts = useFonts({ DoHyeon_400Regular, ContrailOne_400Regular ,CevicheOne_400Regular });
  if (!loadedFonts) {
    return <AppLoading />
  } else {
    return (
      // App Container
      <ScrollView style={styles.container}>
        <StatusBar hidden={ false } />
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
            <Animatable.View style={styles.searchBar} animation = {'fadeIn'} delay = {500}   >
              <Ionicons name='search' color='white' size={20} style={styles.icon} />
              <TextInput placeholder='Search Menu' placeholderTextColor = 'white'   autoCapitalize='none' style={styles.input} />
            </Animatable.View>
        </View>
        </Animatable.View>
        {/* Horizontal scroll category */}
          <Text style={styles.scrollText}>  Something New </Text>  
          <View style = {styles.scrollCard}>
            <FlatList
              data={Something}
              keyExtractor = {(item) => item.key.toString()}
              renderItem={({ item }) => <Card Something={item} key = {item.key} name = {item.name} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
          </View>

        {/* Recommended Section */}
          <Text style= {styles.scrolltext}>Recommended</Text>
        <View style={styles.scrollCard}>
           <FlatList
            data={Recommended}
            decelerationRate = {0.5}
            keyExtractor = {(item)=> item.index}
            renderItem={({ item }) => <Card2 Recommmended={item} menu_name={item.menu_name} Ing1={ item.Ing1}  Ing2={ item.Ing2} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />  
        </View>
        {/* <View style={styles.scrollCard}>
           <FlatList
              data={Recommended}
              keyExtractor = {(item)=> {item.index}}
              renderItem={({ item }) => <Card Recommmended={item} name = {item.name} image = {item.image} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.scrollCard}>
           <FlatList
              data={Recommended}
              keyExtractor = {(item)=> {item.index}}
              renderItem={({ item }) => <Card Recommmended={item} name = {item.name} image = {item.image} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.scrollCard}>
           <FlatList
              data={Recommended}
              keyExtractor = {(item)=> {item.index}}
              renderItem={({ item }) => <Card Recommmended={item} name = {item.name} image = {item.image} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
        </View> */}
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: 'gray',
    paddingBottom: 70,
    marginTop: '2%'
},
  mainView: {
    borderBottomColor: 'white',
    backgroundColor: 'grey',
    width: '100%',
    flex: 0.24,
    marginBottom: 0,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
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
  scrollCard: {
    width: Dimensions.get('window').width,
    marginBottom: 0,
    paddingHorizontal: 0,
    paddingRight: 6.5

    
  },
  scrollText: {
    fontSize: 30,
    marginTop: 20,
    fontFamily: 'CevicheOne_400Regular',
    color: 'black',
  },
  scrolltext: {
    fontSize: 30,
    marginTop: 15,
    fontFamily: 'CevicheOne_400Regular',
    color: 'black',
  },
  scrollables: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 7,
    flexDirection: 'row'
  },
  scrollz: {
    width: '100%',
    marginTop: 0,
    top: 0
  }
  })
