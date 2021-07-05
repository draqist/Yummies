import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FontAwesome, Ionicons, Feather } from '@expo/vector-icons'; 

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
export const Card2 = ({menu_name,Rating, Ordertime, Ing1, Ing2, price, onPress, image}) => {
    return (
        <View style = {{maeginHorizontal:8}}>
            <Pressable style={styles.card2} onPress={onPress} >
                <Image source={image} style={styles.image} />
           </Pressable>
                <View style = {styles.menu}>
                    <Text style = {styles.text0}>{ menu_name }</Text>
                </View>
                <View style={styles.menu}>

                </View>
            <View style={styles.Ing} >
                <FontAwesome name='star' color='orange' size={14} style={{
                    marginTop: 6,
                    right: 0,
                    bottom: 0,
                    left: 10,
                }} />
                <Text style={styles.text2}> {Rating} </Text>
                    <FontAwesome  name = 'circle' size = {8} color ='#777672' style={{
                        marginTop: 10,
                        right: 0,
                        bottom: 0,
                        left: 8,
                        opacity: 0.5
                    }} />
                <View style = {styles.Ing1}>
                    <Feather  name = 'clock' size = {14} color ='#777672' style={{
                        marginTop: 6,
                        right: 0,
                        bottom: 0,
                        left: 13,
                    }} />
                    <Text style={styles.text4}>{Ordertime}</Text>
                        <FontAwesome  name = 'circle' size = {8} color ='#777672' style={{
                            marginTop: 10,
                            right: 0,
                            bottom: 0,
                            left: 15,
                            opacity: 0.5
                        }} />
                    </View>
                <View style = {styles.Ing1}>
                    <FontAwesome  name = 'tag' size = {14} color ='#777672' style={{
                        marginTop: 6,
                        right: 0,
                        bottom: 0,
                        left: 16,
                    }} />
                        <Text style = {styles.text4}>{ price }</Text>
                    </View>
                </View>
        </View >
    ) 
}
const styles = StyleSheet.create({
    card: {
        width: 165,
        height: 230,
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 12,
    },
    card2: {
        width: 300,
        height: 220,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: 'transparent',
        marginRight: 3,
        marginLeft: 3,
        marginVertical: 12,
    },
    menu: {
        marginHorizontal: 3,
        marginTop: 2
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
        marginVertical: 3,
        marginHorizontal: 3,
        opacity: 1,
    },
    text0: {
        fontSize: 20,
        color: '#e8eae6',
        marginHorizontal: 8,
        fontWeight: '700',
        marginTop: 5,
    },
    text2: {
        fontSize: 14,
        color: 'white',
        marginVertical: 3,
        marginLeft: 10,
        borderRadius: 5,
    },
    text4: {
        fontSize: 14,
        color: 'white',
        marginVertical: 3,
        marginLeft: 17,
        left: 6
    },
    Ing: {
        flexDirection: 'row',
    },
    Ing1: {
        flexDirection: 'row',
        marginLeft: 8,
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