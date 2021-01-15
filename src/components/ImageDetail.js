import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';
const ImageDetail = ({title, imageSource}) => {
    
    return (
        <View>
            <Image style={styles.image} source={imageSource}/>
            <Text>{title}</Text>
        </View>
    )
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    image:{
        width:win.width,
        height:300
    }
})
export default ImageDetail;