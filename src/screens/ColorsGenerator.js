import React, { useState } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";
const ColorGenerator = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const COLOR_INCREMENT = 15;
  console.log(green + " "  + blue+ " " + red);
  const setColor = (color, change) =>{
    console.log(color)
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red+change);
        return;
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change);
        return;
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green+change);
        return;
      default:
        return;
    }
  } 
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor('red', COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('red', -1 * COLOR_INCREMENT)
        }}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => {
          setColor('blue', COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('blue', -1 * COLOR_INCREMENT)
        }}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => {
          setColor('green', COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor('green', -1 * COLOR_INCREMENT)
        }}
        color='Green'
      />
      <Text>{` (Red -${red}, Green - ${green}, Blue - ${blue})`}</Text>
      <View style={{height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    margin: 10,
  },
});
export default ColorGenerator;
