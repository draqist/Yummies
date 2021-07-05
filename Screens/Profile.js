import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'
import * as Animatable from 'react-native-animatable'


export const Profile = () => {
    return (
      <Animatable.View style={styles.container} animation= 'fadeInUpBig' >
        
        {/* <ImageBackground source={require('../assets/images/food.jpeg')} style={styles.image}/> */}
            <Text style = {styles.text}> Oh Hello </Text>
        </Animatable.View>
    )
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    zIndex: -20
  },
  text:{
    color: 'white',
    fontSize: 30
  }
});