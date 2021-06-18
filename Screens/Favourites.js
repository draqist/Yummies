import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'

 const Favourites = () => {
    return (
      <View style={styles.container}>
        
        <ImageBackground source={require('../assets/spehg.jpg')} style={styles.image}/>
            <Text>Oh Pyaar</Text>
        </View>
    )
}


export const styles = StyleSheet.create({
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

export default Favourites