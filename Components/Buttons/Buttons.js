import React from 'react'
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native'

const Buttons = ({type, content, onPress}) => {
    const backgroundColor = type === 'primary' ? 'orange' : 'transparent'
    const borderColor = type === 'secondary' ? 'white' : 'transparent'
    return (
        <View style={styles.container}>
                <Pressable style  = {[styles.pressable, {backgroundColor:backgroundColor}, {borderColor:borderColor} ]} onPress={()=> onPress() }>
                    <Text style={styles.text}> { content }</Text>
                </Pressable>
            </View> 
            
       
)}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 4,
        marginHorizontal: 10
    },
    pressable: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1.2
    },
    text: {
        fontSize: 20,
        color: 'white',
        textTransform: 'capitalize',

    }
})

export default Buttons