import React, { useReducer } from "react";
import { Button, StyleSheet, View, Text, ActionSheetIOS } from "react-native";
import ColorCounter from "../components/ColorCounter";
const reducer = (state, action)=>{
    switch(action.type){
        case 'red':
            return state.red + action.payload > 255 ||
              state.red + action.payload < 0
              ? state
              : { ...state, red: state.red + action.payload };
        case 'green':
            return state.red + action.payload > 255 ||
              state.red + action.payload < 0
              ? state
              : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.red + action.payload > 255 ||
            state.red + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload };

        default:
            return state;
    }
}
const ColorGenerator = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const COLOR_INCREMENT = 15;
  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          dispatch({type: "red", payload: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({type: "red", payload: -1 * COLOR_INCREMENT})
        }}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => {
            dispatch({type: "blue", payload: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({type: "blue", payload: -1 * COLOR_INCREMENT})
        }}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => {
            dispatch({type: "green", payload: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({type: "green", payload: -1 * COLOR_INCREMENT})
        }}
        color='Green'
      />
      <Text>{` (Red -${state.red}, Green - ${state.green}, Blue - ${state.blue})`}</Text>
      <View style={{height: 150, width:150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}>

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
