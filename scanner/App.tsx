import React from "react";
import { StyleSheet, View, Text } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import { PermissionsScreen } from "./screens/PermissionsScreen";

const Stack = createNativeStackNavigator();
function PermissionsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Permissions"
    >
      <Stack.Screen
        name="Permissions"
        component={PermissionsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
