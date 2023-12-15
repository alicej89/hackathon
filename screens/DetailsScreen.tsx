import React from "react";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const DetailsScreen = () => {
  const navigation = useNavigation();
  function goBack() {
    //navigation.navigate("Login" as never);
  }

  return (
    <View>
      <ScrollView style={{ padding: 32 }}>
        <Text variant="bodyMedium" style={{ marginBottom: 24 }}>
            Map to be displayed here 🗺️
        </Text>
        <Text variant="bodySmall">...Hopefully</Text>
      </ScrollView>
    </View>
  );
};
