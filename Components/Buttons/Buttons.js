import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ButtonContainer from './ButtonContainer'

const Buttons = ({type, content}) => {
    const backgroundColor = type === 'primary' ? 'orange' : 'transparent'
    //const textColor = 'type' === 'primary' ? 'white' :'white'
    return (
        <ButtonContainer>

            <View style = {styles.container}>
                <Pressable style  = {[styles.pressable, {backgroundColor:backgroundColor} ]}>
                    <Text style={styles.text}> { content }</Text>
                </Pressable>
            </View>
            
        </ButtonContainer>
       
)}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    },
    pressable: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    text: {
        fontSize: 30,
        textTransform: 'capitalize',

    }
})

export default Buttons