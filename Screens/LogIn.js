import React from 'react'
import { View, Text, TextInput, StyleSheet, ImageBackground, Pressable } from 'react-native'
import Buttons from '../Components/Buttons/Buttons'

export const LogIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/eforiro.jpg')} style={ styles.image }/>
            <View style={styles.header}>
                
            </View>
            <View style={styles.footer}>
                <View style = {styles.buttonContainer}>
                    <Buttons type='primary' content='Log In' />
                    <Pressable onPress={()=> console.log('password was forgotten')} style = {styles.center}>
                        <Text style = {styles.text3} >
                            Forgot Password?
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.mainView}>
                     <Text style={styles.text}>
                        Welcome Back!
                    </Text>
                    <Text style={styles.text2}> Sign in to Continue </Text>
                </View>
                <View style={styles.placeholders}>
                     <TextInput placeholder = 'Your Email' style = {styles.input}  />
                </View>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    input: {
       
    },
    placeholders: {

    },
    text3: {
        fontSize:  15
    },
    center: {
        alignItems: 'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 33,
        color: 'black',
        textTransform: 'capitalize'
    },
    mainView: {
        paddingHorizontal: 20,
        flexDirection: 'column',
        margin: 5
    },
    buttonContainer: {
        width: '95%',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 50,
        flexDirection: 'column',
        
    },
    text2: {
        fontSize: 19,
        color: 'grey',
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode:'cover'
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
    },
    footer: {
        flex: 1.7,
        width: '100%',
        height: '70%',
        paddingTop: 20,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})
