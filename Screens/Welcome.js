import React from 'react'
import {View, Text, StyleSheet, ImageBackground } from 'react-native'
import Center from './Center'
import Buttons from '../Components/Buttons/Buttons'
import * as Animatable from 'react-native-animatable'

export const Welcome = ({navigation}) => {
    return (
        <Animatable.View style={styles.maincontainer} animation = 'fadeInUpBig' delay = {300}>
            <ImageBackground source = {require('../assets/lib1.jpeg')} style= {styles.image}  />
            <Center>
                <Text style = {styles.text}> tubhub </Text>
            </Center>
            <View style={styles.container}>
                <Buttons type='primary' content='Log In' onPress ={() => navigation.navigate('LogIn')} />
                <Buttons type = 'secondary' content = 'Register'  onPress = {()=> navigation.navigate('SignUp')}  />
            </View>
        </Animatable.View>
       
)}

const styles = StyleSheet.create({
    maincontainer: {
        width: '100%',
        height: '100%'
    },
    container: {
        width: '95%',
        bottom: 30,
    },
    text: {
        fontSize: 40,
        fontWeight: '500',
        color: 'purple',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    image: {
        position: 'absolute',
        resizeMode: 'contain',
        width: '100%',
        height:'100%'
        
    }
})