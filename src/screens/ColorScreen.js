import React, {useState} from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  
  return (
    <View>
        <Button title="Add Color" onPress={()=>{
            setColors([...colors, randomRgb()])
        }}/>
        {/* <View style={{height: 100, width: 100, backgroundColor: randomRgb()}}> </View>*/}
        <FlatList
        keyExtractor={(item)=>item}
        data={colors}
            renderItem={({item})=>{
                return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
            }}
        />
        
    </View>
  );
};

const randomRgb = () =>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  buttons: {
    padding: 5,
    margin: 10,
  },
});
export default ColorScreen;
