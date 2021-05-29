import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import Center from './Center'
import Buttons from '../Components/Buttons/Buttons'

export const Welcome = ({navigation}) => {
    return (
      <Center> 
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Indomie.jpg')} style={ styles.image }/>
                <Buttons type = 'primary' content = 'Log In'/>
                <Buttons type = 'secondary' content = 'Register'/>
        </View>
        <Text style = {styles.text}> this is the Welcome Screen </Text>
       </Center>
)}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        position: 'absolute',
        bottom: 40,
        
    },
    text: {
        fontSize: 20,
        color: 'green'
    },
    image: {
        position: 'absolute',
        resizeMode: 'contain',
        zIndex:'100'
    }
})