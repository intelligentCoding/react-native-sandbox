import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello this is home screen</Text>
      <View style={styles.buttons}>
        <Button
          style={styles.buttons}
          title='Go TO Components Demo'
          onPress={() => navigation.navigate("ComponentScreen")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Go To List Demo'
          onPress={() => navigation.navigate("ListScreen")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Image Screen'
          onPress={() => navigation.navigate("ImageScreen")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Counter Screen'
          onPress={() => navigation.navigate("CounterScreen")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Color Screen'
          onPress={() => navigation.navigate("ColorScreen")}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title='Color Generator'
          onPress={() => navigation.navigate("ColorGenerator")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttons: {
    padding: 5,
    margin: 10,
  },
});

export default HomeScreen;
