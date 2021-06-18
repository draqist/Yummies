import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'

export const Profile = () => {
    return (
      <View style={styles.container}>
        
        <ImageBackground source={require('../assets/food.jpeg')} style={styles.image}/>
            <Text> Oh Hello </Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode:'cover'
    },
});