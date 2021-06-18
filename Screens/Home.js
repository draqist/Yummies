import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View , TextInput, ImageBackground} from 'react-native'
import { Ionicons, FontAwesome, AntDesign, Feather } from '@expo/vector-icons'
import { useFonts,
  DoHyeon_400Regular , 
} from '@expo-google-fonts/do-hyeon'
import {ContrailOne_400Regular} from '@expo-google-fonts/contrail-one'


let userName = 'Abdullah'
export const Home = ({ navigation }) => {
  const loadedFonts = useFonts({
    DoHyeon_400Regular, ContrailOne_400Regular
  });
  if (!loadedFonts) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/Indomie.jpg')} style={styles.image}/>
        <View style={styles.headerComp}>
          <Text style={styles.text}>  Hello {userName}, </Text>
          <FontAwesome
            name='user'
            size={45}
            color='white'
            style = {styles.icon1}
          />
        </View>
          <View style={styles.headerSub}>
             <Text style={styles.text1}>What would you like to have today?</Text>
         </View>
        <View style={styles.searchBar}   >
          <Ionicons name='search' color='white' size={20} style={styles.icon} />
          <TextInput placeholder='Search Delicacies' autoCapitalize='none' style={styles.input} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    // backgroundColor: '#39135a',
    alignItems: 'center',
  },
  text: {
    fontSize: 29,
    fontFamily: 'DoHyeon_400Regular',
    color: 'lime',
    lineHeight: '1',
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
    fontSize: 14,
    fontFamily: 'ContrailOne_400Regular',
    marginHorizontal: 12,
    color: 'white',
    marginTop: 0,
    paddingTop: 0
  },
  icon: {
    paddingLeft: 5,
    paddingTop: 8
  },
  icon1: {
    marginRight: 10
    
  },
  input: {
        color: 'white',
        flex: 1,
        paddingLeft: 5,
        fontSize: 20,
    },
  headerComp: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  headerSub: {
    flexDirection: 'column'
  },
  searchBar: {
    width: '90%',
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1.2,
    borderColor: 'lime',
    borderRadius: 10,
    backgroundColor: 'grey'

   },
  })
