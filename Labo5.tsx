import * as React from 'react';
import {useState} from 'react';
import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button, FlatList, Pressable } from 'react-native';
import Constants from 'expo-constants';
import {HexColor, rainbow} from "rainbow-colors-array-ts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

const List = () => {
  const colors = rainbow(200,"hex",true);

  const navigation : any = useNavigation();

  
  return (
    <View style={styles.container}>
      <FlatList
        data={colors}
        renderItem={({item}) => <Pressable onPress={() => {
          navigation.push("Detail",{hex: item.hex})
        }}><View style={{backgroundColor: item.hex, height: 50, margin:2}}></View></Pressable>}
        keyExtractor={(item) => item.hex}
      >

      </FlatList>
    </View>
  );
}

const Detail = () => {
  const route: RouteProp<any> = useRoute();

  return (
    <View style={{backgroundColor: route.params?.hex, flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 40, color: "white"}}>{route.params?.hex}</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function Labo5() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={List} />
      <Stack.Screen name="Detail" component={Detail} />

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  textInput: {
    borderWidth: 3,
    padding: 4,
    borderColor: "black"
  },
  header: {
    flexDirection: "column"
  },
  center: {
    flexDirection: "row",
    flex: 1,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  footerText: {
    fontSize: 30
  },
  left: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  right: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  }
});