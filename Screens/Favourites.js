import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'

 const Favourites = () => {
    return (
      <View style={styles.container}>
        
        <ImageBackground source={require('../assets/images/spehg.jpg')} style={styles.image}/>
            <Text style = {styles.text}>Oh Pyaar</Text>
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
    resizeMode: 'contain',
    zIndex: -20    
  },
  text: {
    fontSize: 30,
    color: 'white'
  }
});

export default Favourites