import * as React from 'react';
import {useState} from 'react';
import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Labo4 from './Labo4';
import Labo5 from './Labo5';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "blue",
      }}
      
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size} : any) => <FontAwesome name="home" size={size} color={color} />,
        }} />
      <Tab.Screen name="Labo 4" component={Labo4} options={{
            tabBarIcon: ({color, size} : any) => <MaterialIcons name="looks-4" size={size} color={color} />
        }} />
      <Tab.Screen name="Labo 5" component={Labo5} options={{
            tabBarIcon: ({color, size} : any) => <MaterialIcons name="looks-5" size={size} color={color} />
        }}/>

    </Tab.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});
