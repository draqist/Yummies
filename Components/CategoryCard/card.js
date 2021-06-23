import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable,Image } from 'react-native';

 const Card = ({name, image, navigation}) => {
    return (
        <View>
            <Pressable style={styles.card} onPress = {()=> navigation.navigation('')}>
                 <Text style={styles.text}> {name}</Text>
                 <Image source = {image} style = {styles.image} />
           </Pressable>
        </View >
    )
  
};
const styles = StyleSheet.create({
    card: {
        width: 145,
        height: 155,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
        marginRight: 3,
        marginLeft: 3,
        

    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        marginVertical: 3,
        marginHorizontal: 3,
        opacity: 1,
    },
    image:{
        width: "100%",
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
        opacity: 0.9,
        borderRadius: 10,
        zIndex: -25,
        bottom: 0,
    }
});

export default Card