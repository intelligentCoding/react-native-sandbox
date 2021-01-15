import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Anushree", age: 18},
    { name: "Santhosh", age: 88},
    { name: "Ankit", age: 87},
    { name: "Parth", age: 9},
    { name: "Vicky", age: 19},
  ]

  return (
    <FlatList 
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) =>{
        return (
          <Text>
            <Text>
              {item.name} - Age {item.age}
            </Text>
          </Text>
        )
      }}
    />
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ListScreen;
