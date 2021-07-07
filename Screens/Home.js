import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, TextInput, KeyboardAvoidingView,
  ImageBackground, TouchableOpacity, FlatList, Image, Dimensions,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons';
import { useFonts,DoHyeon_400Regular } from '@expo-google-fonts/do-hyeon'
import { ContrailOne_400Regular } from '@expo-google-fonts/contrail-one'
import { CevicheOne_400Regular} from '@expo-google-fonts/ceviche-one'
import {Card, Card2} from '../Components/CategoryCard/card'
import { Something, Recommended } from '../Components/CategoryCard/Cardlist'
import AppLoading from 'expo-app-loading';


let userName = 'Abdullah'
export const Home = ({ navigation }) => {
  const [loadedFonts] = useFonts({ DoHyeon_400Regular: DoHyeon_400Regular, CevicheOne_400Regular:CevicheOne_400Regular, ContrailOne_400Regular:ContrailOne_400Regular  });
  if (!loadedFonts) {
    return <AppLoading />
  } else {
    return (
      // App Container
      <View style={styles.container}>
        <StatusBar style = 'light'  backgroundColor = '#1a2228' />
          <KeyboardAvoidingView behaviour = 'padding' style= {{width:'100%',}}>
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
              <TextInput placeholder='Search Menu' placeholderTextColor = 'white'  fontFamily ='DoHyeon_400Regular' autoCapitalize='none' style={styles.input} />
            </Animatable.View>
        </View>
        </Animatable.View>
         </KeyboardAvoidingView>
        {/* Horizontal scroll category */}
          <ScrollView style={styles.container1} >
            <Text style={styles.scrollText}>  Something New </Text>  
          <View style = {styles.scrollCard}>
            <FlatList
              data={Something}
              keyExtractor = {item => item.key.toString()}
              renderItem={({ item }) => <Card Something={item} key = {item.key} name = {item.name} image = {item.image} onPress = {()=> navigation.push('OrderMenu')} />}
              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />
          </View>

        {/* Recommended Section */}
          <Text style= {styles.scrolltext}>Recommended</Text>
        <View style={styles.scrollCard}>
          <FlatList
            //to change the pictures in this section to match with thier titles
            data={Recommended}
            decelerationRate = {0.5}
            keyExtractor = {item => item.key.toString()}
            renderItem={({ item }) => <Card2 Recommmended={item} menu_name={item.menu_name} price = {item.price} Rating ={ item.Rating}  Ordertime={ item.Ordertime} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}

              horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />  
          </View>
          {/* <View style={styles.scrollCard}>
              <FlatList
                //to change the pictures in this section to match with thier titles
                data={Recommended}
                decelerationRate = {0.5}
                keyExtractor = {item => item.key.toString()}
                renderItem={({ item }) => <Card2 Recommmended={item} menu_name={item.menu_name} Rating ={ item.Rating}  Ordertime={ item.Ordertime} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}
                  horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />  
            </View>
            <View style={styles.scrollCard}>
              <FlatList
                //to change the pictures in this section to match with thier titles
                data={Recommended}
                decelerationRate = {0.5}
                keyExtractor = {item => item.key.toString()}
                renderItem={({ item }) => <Card2 Recommmended={item} menu_name={item.menu_name} Rating ={ item.Rating}  Ordertime={ item.Ordertime} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}
                  horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />  
            </View>
            <View style={styles.scrollCard}>
              <FlatList
                //to change the pictures in this section to match with thier titles
                data={Recommended}
                decelerationRate = {0.5}
                keyExtractor = {item => item.key.toString()}
                renderItem={({ item }) => <Card2 Recommmended={item} menu_name={item.menu_name} Rating ={ item.Rating}  Ordertime={ item.Ordertime} image = {item.image} onPress = {()=> navigation.navigate('OrderMenu')} />}
                  horizontal={true} style={styles.scrollables} showsHorizontalScrollIndicator={false} />  
            </View> */} 
          </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#1a2228',
    paddingBottom: 70,
    paddingTop: '5%',
},
  container1: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#1a2228',
},
  mainView: {
    borderBottomColor: 'white',
    width: '100%',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  mainHeader: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#dee3de',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  text: {
    fontSize: 40,
    fontFamily: 'DoHyeon_400Regular',
    color: '#f08300',
    marginTop: 6,
    
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
    color: '#1a2228',
    marginTop: 0,
    paddingTop: 0
  },
  icon: {
    paddingLeft: 7,
    paddingRight: 9,
    paddingTop: 11
  },
  icon1: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 0
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
    height: 46,
    justifyContent:'center',
    marginVertical: 10,
    borderWidth: 1.2,
    borderColor: '#f08300',
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
    marginTop: 15,
    fontFamily: 'CevicheOne_400Regular',
    color: '#f7fcfe',
  },
  scrolltext: {
    fontSize: 30,
    marginTop: 15,
    fontFamily: 'CevicheOne_400Regular',
    color: '#f7fcfe',
    marginLeft: 10,
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
