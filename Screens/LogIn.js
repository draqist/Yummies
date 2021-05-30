import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
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
                    <Pressable onPress={()=> console.warn('password was forgotten')}>
                        <Text>
                            Forgot Password?
                        </Text>
                    </Pressable>
                    </View>
                <View style={styles.mainView}>
                     <Text style={styles.text}>
                        Welcome Back!
                    </Text>
                    <Text style = {styles.text2}> Sign in to Continue </Text>
               </View>
            </View>
        </View>
)
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: 'black',
        textTransform: 'capitalize'
    },
    mainView: {
        alignItems: 'center',
        margin: 0,
        paddingTop: 0,
        flexDirection:'column'
    },
    buttonContainer: {
        width: '95%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems:'center',
        bottom: 50,
        flexDirection:'column'
    },
    text2: {
        fontSize: 18,
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
        justifyContent:'center',
        flex: 1.5,
        width: '100%',
        height: '70%',
        paddingTop: 20,
        paddingHorizontal: 0,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})
