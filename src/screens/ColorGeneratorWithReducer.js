import React, { useReducer } from "react";
import { Button, StyleSheet, View, Text, ActionSheetIOS } from "react-native";
import ColorCounter from "../components/ColorCounter";
const reducer = (state, action)=>{
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 ||
              state.red + action.amount < 0
              ? state
              : { ...state, red: state.red + action.amount };
        case 'green':
            return state.red + action.amount > 255 ||
              state.red + action.amount < 0
              ? state
              : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.red + action.amount > 255 ||
            state.red + action.amount < 0
            ? state
            : { ...state, blue: state.blue + action.amount };

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
          dispatch({colorToChange: "red", amount: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({colorToChange: "red", amount: -1 * COLOR_INCREMENT})
        }}
        color='Red'
      />
      <ColorCounter
        onIncrease={() => {
            dispatch({colorToChange: "blue", amount: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({colorToChange: "blue", amount: -1 * COLOR_INCREMENT})
        }}
        color='Blue'
      />
      <ColorCounter
        onIncrease={() => {
            dispatch({colorToChange: "green", amount: COLOR_INCREMENT})
        }}
        onDecrease={() => {
            dispatch({colorToChange: "green", amount: -1 * COLOR_INCREMENT})
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
