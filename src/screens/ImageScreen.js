import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () =>  {
    return (
        <ScrollView>
            <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")}/>
            <ImageDetail title="Ocean" imageSource={require("../../assets/ocean.jpg")}/>
            <ImageDetail title="Lake"imageSource={require("../../assets/lake.jpeg")}/>
            <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;
