import React from 'react'
import {View,Text,StyleSheet, ImageBackground} from 'react-native'

const Center = ({children}) => {
    return (
        <View style={styles.container}>
            
            {children}
        </View>
)}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        //backgroundColor: 'yellow',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Center