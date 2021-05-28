import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const ButtonContainer = ({children}) => {
    return (
        <View style = {styles.buttonContainer}>
            {children}
        </View>
)}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '80%',
        position: 'absolute',
        bottom: 40,
        padding:10
    }
})

export default ButtonContainer