import getTime from "date-fns/getTime";
import type { LocationObject } from "expo-location";
import type { Region } from "react-native-maps";

export function formatRegionToLocation(region: Region): LocationObject {
  const { latitude, longitude } = region;

  const location = {
    timestamp: getTime(new Date()),
    coords: {
      latitude,
      longitude,
      altitude: null,
      accuracy: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    },
  };
  return location;
}
