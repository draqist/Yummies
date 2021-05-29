import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text style= {styles.text}> This is the SignUp Screen </Text>
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

export default SignUp