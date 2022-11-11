import { Text, View, TextInput, StyleSheet, StyleProp, ViewStyle,Button } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const HomeScreen = () => {

  const navigation : any = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Rainbows</Text>
      <Button title="Ga naar labo 5" onPress={() => {navigation.navigate("Labo 5")}}/>
    </View>
  );
}

export default HomeScreen;