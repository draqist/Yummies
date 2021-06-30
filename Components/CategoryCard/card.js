import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable,Image } from 'react-native';

 export const Card = ({name, image, onPress}) => {
    return (
        <View>
            <Pressable style={styles.card} onPress={onPress} >
                 <Text style={styles.text}> {name}</Text>
                 <Image source = {image} style = {styles.image} />
           </Pressable>
        </View >
    )
  
};
export const Card2 = ({menu_name,Ing1, Ing2,onPress, image}) => {
    return (
        <View>
            <Pressable style={styles.card2} onPress={onPress} >
                <Image source={image} style={styles.image} />
           </Pressable>
                <View>
                    <Text style = {styles.text0}>{ menu_name }</Text>
                </View>
            <View>
                    <Text style = {styles.text1}>{ menu_name }</Text>
                </View>
                <View style = {styles.Ing} >
                    <Text style = {styles.text2}>{ Ing1 }</Text>
                    <Text style = {styles.text2}>{ Ing2 }</Text>
                </View>
                <View style = {styles.Ing}>
                </View>
        </View >
    ) 
}
const styles = StyleSheet.create({
    card: {
        width: 145,
        height: 200,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
        marginRight: 3,
        marginLeft: 3,
    },
    card2: {
        width: 280,
        height: 180,
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
    text2: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
        marginVertical: 3,
        marginRight: 7,
        backgroundColor: 'black',
        borderRadius: 5,
        zIndex: 100,

    },
    Ing: {
        flexDirection: 'row',
        
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

const CatCard = {Card, Card2}
export default CatCard