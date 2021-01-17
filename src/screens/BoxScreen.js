import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  const [colors, setColors] = useState([]);

  return (
      <ScrollView>
        <Text style={styles.heading}>alignItems:'flex-start'</Text>
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>alignItems:'center'</Text>
        <View style={styles.viewStyle2}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>alignItems:'flex-end'</Text>
        <View style={styles.viewStyle3}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>flexDirection:'column'</Text>
        <View style={styles.viewStyle4}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>flexDirection:'row'</Text>
        <View style={styles.viewStyle5}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>justifyContent:'flex-start'</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>justifyContent:'center'</Text>
        <View style={styles.viewStyle7}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>justifyContent:'space-between'</Text>
        <View style={styles.viewStyle8}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>justifyContent:'space-around'</Text>
        <View style={styles.viewStyle9}>
            <Text style={styles.textStyle}>Child# 1</Text>
            <Text style={styles.textStyle}>Child# 2</Text>
            <Text style={styles.textStyle}>Child# 3</Text>
        </View>
        <Text style={styles.heading}>Flex Values on children</Text>
        <Text style={styles.heading}>One Child with Flex value</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStyle}>Child# 1 no flex</Text>
            <Text style={styles.textStyleFlex1}>Child# 2 flex: 1</Text>
            <Text style={styles.textStyle}>Child# 3 no flex</Text>
        </View>
        <Text style={styles.heading}>Two Children with Flex value</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStyle}>Child# 1 no flex</Text>
            <Text style={styles.textStyleFlex1}>Child# 2 flex: 1</Text>
            <Text style={styles.textStyleFlex1}>Child# 3 flex: 1</Text>
        </View>
        <Text style={styles.heading}>All children with flex value</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStyleFlex1}>Child# 1 flex: 1</Text>
            <Text style={styles.textStyleFlex1}>Child# 2 flex: 1</Text>
            <Text style={styles.textStyleFlex1}>Child# 3 flex: 1</Text>
        </View>
        <Text style={styles.heading}>All children with different flex value</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStyleFlex4}>Child# 1 flex: 4</Text>
            <Text style={styles.textStyleFlex4}>Child# 2 flex: 4</Text>
            <Text style={styles.textStyleFlex2}>Child# 3 flex: 2</Text>
        </View>
        <Text style={styles.heading}>alignSelf: 'flex-end', 'center', flex-star</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStylealignSelf1}>Child# 1 alignSelf: 'flex-end'</Text>
            <Text style={styles.textStylealignSelf2}>Child# 2 alignSelf: 'center'</Text>
            <Text style={styles.textStylealignSelf3}>Child# 3 alignSelf: 'flex-start'</Text>
        </View>
        <Text style={styles.heading}>position: 'absolute'</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStylePosition}>Child# 1 position:'absolute'</Text>
            <Text style={styles.textStylealignSelf2}>Child# 2 alignSelf: 'center'</Text>
            <Text style={styles.textStylealignSelf3}>Child# 3 alignSelf: 'flex-start'</Text>
        </View>
        <Text style={styles.heading}>position: 'relative'</Text>
        <View style={styles.viewStyle6}>
            <Text style={styles.textStylePosition2}>Child# 1 position:'absolute'</Text>
            <Text style={styles.textStylealignSelf2}>Child# 2 alignSelf: 'center'</Text>
            <Text style={styles.textStylealignSelf3}>Child# 3 alignSelf: 'flex-start'</Text>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: "black",
  },
  viewStyle2: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "black",
  },
  viewStyle3: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: "black",
  },
  viewStyle4: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "black",
  },
  viewStyle5: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: "black",
    height:100
  },
  viewStyle6: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "black",
    justifyContent: 'flex-start',
    height: 150
  },
  viewStyle7: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "black",
    justifyContent: 'center',
    height: 150
  },
  viewStyle8: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "black",
    justifyContent: 'space-between',
    height: 150
  },
  viewStyle9: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: "black",
    justifyContent: 'space-around',
    height: 150
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
  heading: {
    paddingBottom: 10,
    fontSize: 18,
    paddingTop:10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textStyleFlex1:{
    borderWidth: 1,
    borderColor: "red",
      flex:1
  },
  textStyleFlex4:{
    borderWidth: 1,
    borderColor: "red",
      flex:4,
  },
  textStyleFlex2:{
      borderWidth: 1,
      borderColor: "red",
      flex:2
    },
    textStylealignSelf1:{
      borderWidth: 1,
      borderColor: "red",
        alignSelf: 'flex-end'
    },
    textStylePosition:{
      borderWidth: 1,
      borderColor: "red",
        alignSelf: 'flex-end',
        position: 'absolute'
    },
    textStylePosition2:{
      borderWidth: 1,
      borderColor: "red",
        alignSelf: 'flex-end',
        position: 'relative'
    },
    textStylealignSelf2:{
      borderWidth: 1,
      borderColor: "red",
        alignSelf: 'center'
    },
    textStylealignSelf3:{
      borderWidth: 1,
      borderColor: "red",
        alignSelf: 'flex-start'
    },
});
export default BoxScreen;
