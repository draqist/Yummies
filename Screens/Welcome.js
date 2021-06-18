import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View, Text, StyleSheet, ImageBackground } from 'react-native'
import Center from './Center'
import Buttons from '../Components/Buttons/Buttons'
import * as Animatable from 'react-native-animatable'
import { useFonts, CabinSketch_700Bold } from '@expo-google-fonts/cabin-sketch';
import AppLoading from 'expo-app-loading';

export const Welcome = ({ navigation }) => {
    let loadedFonts = useFonts({
        CabinSketch_700Bold
    });
    if (!loadedFonts) {
        return <AppLoading />
    } else {
        return (
            <Animatable.View style={styles.maincontainer} animation='fadeInUpBig' delay={300}>
                <StatusBar style="auto" />
                <ImageBackground source={require('../assets/jolof.png')} style={styles.image} />
                <Center>
                    <Text style={styles.text}> tubhub </Text>
                </Center>
                <View style={styles.container}>
                    <Buttons type='primary' content='Log In' onPress={() => navigation.navigate('LogIn')} />
                    <Buttons type='secondary' content='Register' onPress={() => navigation.navigate('SignUp')} />
                </View>
            </Animatable.View>
           
        )
    }
    }

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
        fontSize: 70,
        fontFamily: 'CabinSketch_700Bold',
        fontWeight: 'bold',
        color: 'white',
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