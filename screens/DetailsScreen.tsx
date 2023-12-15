import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-paper";

export const DetailsScreen = () => {
  const route = useRoute<any>();

  return (
    <ScrollView style={{ padding: 32 }}>
      <Text>{JSON.stringify(route.params)}</Text>
    </ScrollView>
  );
};
