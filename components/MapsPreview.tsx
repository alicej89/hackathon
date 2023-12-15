import type { LocationObject } from "expo-location";
import React from "react";
import { TouchableOpacity, type GestureResponderEvent } from "react-native";
import { Text } from "react-native-paper";
import MapView from "react-native-maps";
import { formatInitialRegion } from "../utils/formatInitialRegion";

type MapsPreviewProps = {
  location: LocationObject | undefined;
  onPress: (event: GestureResponderEvent) => void;
};

export const MapsPreview = ({ location, onPress }: MapsPreviewProps) => {
  if (!location) {
    return <Text variant="bodyMedium">No location found</Text>;
  }

  const initialRegion = formatInitialRegion(location);

  return (
    <TouchableOpacity onPress={onPress}>
      <MapView
        style={{
          height: 180,
          width: "100%",
          borderRadius: 24,
        }}
        zoomEnabled={false}
        zoomTapEnabled={false}
        zoomControlEnabled={false}
        minZoomLevel={13}
        maxZoomLevel={14}
        initialRegion={initialRegion}
        scrollEnabled={false}
        liteMode={true}
        showsUserLocation={true}
      />
    </TouchableOpacity>
  );
};
