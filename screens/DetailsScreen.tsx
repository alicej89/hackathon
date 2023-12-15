import { useRoute } from "@react-navigation/native";
import React from "react";
import type { LocationObject } from "expo-location";
import { GestureResponderEvent, ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MapsPreview } from "../components/MapsPreview";
import { getTime } from "date-fns";

/**
 * This is a mock of the location object returned by the camera.
 * replace it with the location we got from expo-location
 */
export const initialLocation: LocationObject = {
  coords: {
    latitude: 48.856614, // Paris
    longitude: 2.3522219,
    altitude: null,
    accuracy: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: getTime(new Date()),
};

export const DetailsScreen = () => {
  const route = useRoute<any>();

  const navigation = useNavigation<any>();
  function navigateToMaps() {
    navigation.navigate("Map", { location: initialLocation });
  }

  return (
    <ScrollView style={{ padding: 32 }}>
      <View style={{ flex: 1 }}>
        <Text variant="bodyMedium" style={{ marginBottom: 24 }}>
          📸 Here is the result of your scan
        </Text>
        <Text>{JSON.stringify(route.params)}</Text>
      </View>
      <MapsPreview location={initialLocation} onPress={navigateToMaps} />
    </ScrollView>
  );
};
