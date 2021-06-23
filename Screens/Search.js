import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'

export const Search = () => {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/ire1.jpeg')} style={styles.image}/>
            <Text style = {styles.text}  >Oh Hi</Text>
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
    resizeMode: 'cover',
    zIndex: -20,
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
