import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    TouchableOpacity,
    } from 'react-native'
import Buttons from '../Components/Buttons/Buttons'
import {FontAwesome} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'

export const LogIn = ({ navigation }) => {
    const anime1= 'slideInRight'
    const anime = 'fadeInUpBig'
    
    const [details, setDetails] = useState({
        Username: '',
        Password: '',
        check_textInputChange: false,
        secureTextEntry : true,
    })

    const passwordHandler = (val) => {
        setDetails({
            ...details,
            Password: val
        })
    }
    const updateEye = () => {
        setDetails({
            ...details,
            secureTextEntry: !details.secureTextEntry
        })
    }

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setDetails({
                ...details,
                Username: val,
                check_textInputChange: true
                
            })
        } else {
            setDetails({
                ...details,
                Username: val,
                check_textInputChange:false
            })
        }
    }
    return (
        <Animatable.View style={styles.container} animation = {anime1}  >
            <ImageBackground source={require('../assets/eforiro.jpg')} style={ styles.image }/>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <View style={styles.back}>
                    <FontAwesome
                        name='arrow-left'
                        size={25}
                        color = 'white'
                    />
                </View>
                </TouchableOpacity>
            </View>
            <Animatable.View style={styles.footer} animation = {anime} delay={1000}  >
             <Image source = {require('../assets/lob.jpg')} style = {styles.image1} />
                <View >
                    <View style={styles.mainView}>
                        <Text style={styles.text}>
                            Welcome Back!
                        </Text>
                        <Text style={styles.text2}> Sign in to Continue </Text>
                    </View>
                <ScrollView>
                    <Text style={styles.text1}> Email </Text>
                    <View style={styles.placeholders}>
                        <FontAwesome
                            name='user-o'
                            color="#05375a"
                            size= {20}
                        />
                            <TextInput placeholder='Your Email' style={styles.input} autoCapitalize='none' onChangeText={(val) => textInputChange(val)} />
                            {details.check_textInputChange ?
                                <Animatable.View animation = 'bounceIn' >
                                        <Feather name='check-circle'  color='green' size = {20} />          
                                </Animatable.View>: null
                            }
                        
                    </View>
                    <Text style={styles.text1}> Password </Text>
                    <View  style={styles.placeholders}>
                        <Feather
                            name='lock'
                            color="#05375a"
                            size= {20}
                        />
                            <TextInput placeholder='Your Password' style={styles.input} secureTextEntry={details.secureTextEntry ? true : false} autoCapitalize='none' onChangeText={(val) => passwordHandler(val)} />
                            <TouchableOpacity onPress = {updateEye}>
                                {details.secureTextEntry ?
                                    <Feather
                                        name='eye-off'
                                        color='#05375a'
                                        size={20} /> :
                                    <Feather
                                        name='eye'
                                        color='#05375a'
                                        size={20} />
                                }
                            </TouchableOpacity>
                    </View>
                </ScrollView>
            </View> 
                 <View style={styles.buttonContainer}>
                    <Buttons type='primary' content='Log In' />
                    <View style={styles.container0} >
                        <Pressable style = {styles.pressing}>
                            <Text style={styles.text4} >
                                Sign in with Google
                            </Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={()=> console.log('password was forgotten')} style = {styles.center}>
                        <Text style = {styles.text3} >
                            Forgot Password?
                        </Text>
                    </Pressable>
                </View> 
               
            </Animatable.View>
        </Animatable.View>
)
}

const styles = StyleSheet.create({
    container0:{
        width: '100%',
        paddingVertical: 4,
        marginHorizontal: 10
    },
    pressing: {
       height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1.2
    },
    text4: {
        fontSize: 20,
        color: '#05375a',
    },
    input: {
        color: '#05375a',
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
        borderColor: '#05375a'
    },
    text3: {
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 33,
        color: '#05375a',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    mainView: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        margin: 5
    },
    buttonContainer: {
        marginTop: 40,
        width: '95%',
        position: 'relative',     
    },
    text2: {
        fontSize: 19,
        color: '#05375a',
        fontWeight: '400'
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode:'cover'
    },
    image1: {
        opacity: 0.3,
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    footer: {
        flex: 1.73,
        width: '100%',
        height: 0,
        marginTop: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    back: {
        marginVertical: 30,
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    }
})
