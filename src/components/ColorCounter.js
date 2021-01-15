import React from 'react'
import { Button, StyleSheet, View, Text } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return <View>
        <Text>{color}</Text>
        <View style={styles.buttons} >
            <Button onPress={()=>onIncrease()} title={`Increase ${color}`}/>
        </View>
        <View style={styles.buttons} >
            <Button onPress={()=>onDecrease()} title={`Decrease ${color}`}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    buttons: {
      padding: 5,
    //   margin: 10,
    },
  });
  export default ColorCounter;