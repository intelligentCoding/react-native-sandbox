import React from "react";
import { Text, StyleSheet, View, Button, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
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
          title='Counter Screen with Reducer'
          onPress={() => navigation.navigate("CounterScreenWithReducer")}
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
      <View style={styles.buttons}>
        <Button
          title='Color Generator with Reducer'
          onPress={() => navigation.navigate("ColorGeneratorWithReducer")}
        />
        </View>
      <View style={styles.buttons}>
        <Button
          title='Text Screen'
          onPress={() => navigation.navigate("TextScreen")}
        />
        </View>
      <View style={styles.buttons}>
        <Button
          title='Box Screen'
          onPress={() => navigation.navigate("BoxScreen")}
        />
        </View>

    </ScrollView>
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
