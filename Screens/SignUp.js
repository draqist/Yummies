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

export const SignUp = ({ navigation }) => {
    const anime1= 'slideInDown'
    const anime = 'fadeInUpBig'
    
    const [details, setDetails] = useState({
        Username: '',
        Password: '',
        check_textInputChange: false,
        secureTextEntry : true,
    })
    const [details1, setDetails1] = useState({
        Username: '',
        check_textInputChange1: false,
        secureTextEntry: true,
    })

    const passwordHandler1 = (val1) => {
        setDetails1({
            ...details1,
            Password: val1
        })
    }
    const updateEye1 = () => {
        setDetails1({
            ...details1,
            secureTextEntry: !details1.secureTextEntry
        })
    }
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
    const alert = () => {
            if (passwordHandler1(val1)  === passwordHandler(val) ) { null } else { console.log('Password does not match')}
        
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
    const textInputChange1 = (val1) => {
        if (val1.length !== 0) {
            setDetails1({
                ...details1,
                Username: val1,
                check_textInputChange1: true
                
            })
        } else {
            setDetails1({
                ...details1,
                Username: val1,
                check_textInputChange1:false
            })
        }
    }
    return (
        <Animatable.View style={styles.container} animation = {anime1}  >
            <ImageBackground source={require('../assets/iresi.jpeg')} style={ styles.image }/>
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
             <Image source = {require('../assets/mpp.jpg')} style = {styles.image1} />
                <View >
                    <View style={styles.mainView}>
                        <Text style={styles.text}>
                            Create an account
                        </Text>
                        <Text style={styles.text2}> Enlighten your tatsebuds with us..... </Text>
                    </View>
                    <ScrollView style={styles.scrollable}>
                    <Text style={styles.text1}> name </Text>
                    <View style={styles.placeholders}>
                        <FontAwesome
                            name='user-o'
                            color="#05375a"
                            size= {20}
                        />
                            <TextInput placeholder='John Doe' style={styles.input} autoCapitalize='none' onChangeText={(val) => textInputChange(val)} />
                            {details.check_textInputChange ?
                                <Animatable.View animation = 'bounceIn' >
                                        <Feather name='check-circle'  color='green' size = {20} />          
                                </Animatable.View>: null
                            }
                        
                    </View>
                   
                    <Text style={styles.text1}> Email </Text>
                    <View style={styles.placeholders}>
                        <Feather
                            name='mail'
                            color="#05375a"
                            size= {20}
                        />
                            <TextInput placeholder='JohnDoe@gmail.com' style={styles.input} autoCapitalize='none' onChangeText={(val1) => textInputChange1(val1)} />
                            {details1.check_textInputChange1 ?
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
                        <Text style={styles.text1}> ConFirm Password </Text>
                    <View  style={styles.placeholders}>
                        <Feather
                            name='lock'
                            color="#05375a"
                            size= {20}
                        />
                            <TextInput placeholder='Your Password' style={styles.input} secureTextEntry={details1.secureTextEntry ? true : false} autoCapitalize='none' onChangeText={(val1) => passwordHandler1(val1)} />
                            <TouchableOpacity onPress = {updateEye1}>
                                {details1.secureTextEntry ?
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
                    <Buttons type='primary' content='Sign Up' />
                    <View style={styles.contain}>
                        <View style={styles.contain0} >
                            <Text style = {styles.text3} >
                                Already have an account?
                            </Text>
                        </View>
                    <View style={styles.container0} >
                        <Pressable style = {[styles.pressing, {color: 'orange'}]}>
                            <Text style={styles.text4} >
                                Log In
                            </Text>
                        </Pressable>
                    </View>
                    </View>
                        
                </View> 
               
            </Animatable.View>
        </Animatable.View>
)
}

const styles = StyleSheet.create({
    contain0: {
      flex: 1.5  
    },
    contain: {
        width: '100%',
        height: '100%',
        flex: 1,
        top: 10
    },
    container0: {
        flex: 1,
        width: '40%',
        left: 200,
        marginVertical: 9,
        marginHorizontal: 10,
    },
    pressing: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    text4: {
        fontSize: 23,
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
        color: 'grey',
        fontSize: 23,
        marginHorizontal: 20,
        marginVertical: 20,
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
    },
    mainView: {
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'column',
        margin: 5
    },
    buttonContainer: {
        marginTop: 20,
        width: '95%',
        top: 0,
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
        opacity: 0.2,
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
        flex:5,
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
