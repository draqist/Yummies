import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Favourites = () => {
    return (
        <View style={styles.container}>
            <Text>Oh Pyaar</Text>
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
});

export default Favourites