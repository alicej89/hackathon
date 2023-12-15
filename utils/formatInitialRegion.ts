import type { LocationObject } from "expo-location";
import { Dimensions } from "react-native";
import type { Region } from "react-native-maps";

const { width, height } = Dimensions.get("window");

/***
 * latitudeDelta documentation
 * @link https://developer.apple.com/documentation/mapkit/mkcoordinatespan/1452417-latitudedelta
 */
export const formatInitialRegion = (location: LocationObject): Region => {
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const { latitude, longitude } = location.coords;
  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return region;
};
