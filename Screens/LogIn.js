import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export const LogIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style = {styles.text}> this is the log in screen </Text>
        </View>
)
}

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
