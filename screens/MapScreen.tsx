import { useRoute } from "@react-navigation/native";
import { LocationObject } from "expo-location";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import { Text } from "react-native-paper";
import { formatRegionToLocation } from "../utils/formatRegionToLocation";

export const MapScreen = () => {
  const route = useRoute();
  const location = route?.params?.location;
  console.log("🚀 ~ file: MapScreen.tsx:10 ~ MapScreen ~ location:", location);

  const [updatedRegion, setUpdatedRegion] = useState<LocationObject>(location);
  const handleRegionChangeComplete = async (region: Region) => {
    const updatedArea = formatRegionToLocation(region);
    setUpdatedRegion(updatedArea);
  };

  return (
    <View style={styles.container}>
      {/* extrat this to a Map component to make it easially shareable */}
      <MapView
        style={styles.map}
        initialRegion={location}
        locationArea={updatedRegion}
        onRegionChangeComplete={handleRegionChangeComplete}
        showsUserLocation={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
