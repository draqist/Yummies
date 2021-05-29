import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ButtonContainer from './ButtonContainer'

const Buttons = ({type, content}) => {
    const backgroundColor = type === 'primary' ? 'orange' : 'transparent'
    //const textColor = 'type' === 'primary' ? 'white' :'white'
    const borderColor = type === 'secondary' ? 'white' : 'transparent'
    return (
       /* <ButtonContainer>

        </ButtonContainer>*/
            <View style = {styles.container}>
                <Pressable style  = {[styles.pressable, {backgroundColor:backgroundColor}, {borderColor:borderColor} ]}>
                    <Text style={styles.text}> { content }</Text>
                </Pressable>
            </View>
            
       
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
        borderRadius: 8,
        borderWidth: 1.2
    },
    text: {
        fontSize: 30,
        textTransform: 'capitalize',

    }
})

export default Buttons