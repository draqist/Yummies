import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const Center = ({children}) => {
    return (
        <View style={styles.container}> 
            {children}
        </View>
)}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        alignItems: 'center',
        padding:50
        //justifyContent: 'center',
    }
})

export default Center