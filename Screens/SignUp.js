import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'

export const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}> This is the SignUp Screen </Text>
            <Button title='Go to Home screen' onPress={()=> navigation.navigate('Welcome') }/>
        </View>
)}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'green'
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
