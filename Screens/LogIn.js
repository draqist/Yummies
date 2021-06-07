import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    Pressable,
    ScrollView,
    KeyboardAvoidingView} from 'react-native'
import Buttons from '../Components/Buttons/Buttons'
import {FontAwesome} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

export const LogIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/eforiro.jpg')} style={ styles.image }/>
            <View style={styles.header}>  
            </View>
            <Animatable.View style={styles.footer} animation='slideInUp' delay={100} >
                 <KeyboardAvoidingView style = {styles.buttonContainer}>
                    <Buttons type='primary' content='Log In' />
                    <Pressable onPress={()=> console.log('password was forgotten')} style = {styles.center}>
                        <Text style = {styles.text3} >
                            Forgot Password?
                        </Text>
                    </Pressable>
                </KeyboardAvoidingView>
                <ScrollView>
                <View style={styles.mainView}>
                     <Text style={styles.text}>
                        Welcome Back!
                    </Text>
                    <Text style={styles.text2}> Sign in to Continue </Text>
                </View>
                <Text style={styles.text1}> Email </Text>
                <View style={styles.placeholders}>
                    <FontAwesome
                        name='user-o'
                        color="#05375a"
                        size= {20}
                    />
                    <TextInput placeholder='Your Email' style={styles.input} />
                    <Feather
                        name='check-circle'
                        color='green'
                        size = {20}
                    />
                </View>
                <Text style={styles.text1}> Password </Text>
                <View style={styles.placeholders}>
                    <FontAwesome
                        name='lock'
                        color="#05375a"
                        size= {20}
                    />
                    <TextInput placeholder='Your Password' style={styles.input} />
                    <Feather
                        name='eye-off'
                        color='#05375a'
                        size = {20}
                    />
                </View>
                </ScrollView>
                
            </Animatable.View>
        </View>
)
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingLeft: 8,
        fontSize: 20,
    },
    text1:{
        marginTop: 10,
        paddingHorizontal: 30,
        paddingTop: 10,
        textTransform: 'uppercase',
        marginVertical:0
    },
    placeholders: {
        flexDirection: 'row',
        marginVertical: 10,
        marginLeft: 30,
        marginRight: 15,
        borderBottomWidth: 0.9,
        borderColor: 'grey'
    },
    text3: {
        fontSize: 15,
        alignItems: 'center',
        justifyContent: 'center'
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
        bottom: 30,      
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
        flex: 1.73,
        width: '100%',
        height: '70%',
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
})
