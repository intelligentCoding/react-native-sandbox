import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <View style={styles.buttons}>
        <Button title='Increase' onPress={() => setCounter(counter+1)} />
      </View>
      <View style={styles.buttons}>
        <Button title='Decrease' onPress={() => setCounter(counter-1)} />
      </View>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    margin: 10,
  },
});
export default CounterScreen;
