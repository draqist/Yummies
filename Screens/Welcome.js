import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Center from './Center'
import Buttons from '../Components/Buttons/Buttons'

export const Welcome = ({navigation}) => {
    return (
       /* <Center> 
       <Text style = {styles.text}> this is the log in screen </Text>
       </Center>*/
        <View style={styles.container}>
                <Buttons type = 'primary' content = 'Log In'/>
        </View>
)}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    text: {
        fontSize: 20,
        color: 'green'
    }
})