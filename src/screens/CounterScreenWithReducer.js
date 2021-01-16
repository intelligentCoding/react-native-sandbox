import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};
const CounterScreenWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const COUNTER_INCREMENT = 1;
  return (
    <View>
      <View style={styles.buttons}>
        <Button
          title='Increase'
          onPress={() =>{
              dispatch({ type: "increase", payload: COUNTER_INCREMENT })
          }
          }
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Decrease'
          onPress={() =>{
              dispatch({ type: "decrease", payload: COUNTER_INCREMENT })
          }
          }
        />
      </View>
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    margin: 10,
  },
});
export default CounterScreenWithReducer;
