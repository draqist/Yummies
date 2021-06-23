import React from 'react'
import {View,StyleSheet } from 'react-native'

const Center = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})

export default Center