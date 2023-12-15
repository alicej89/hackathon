import { formatInitialRegion } from "./formatInitialRegion";

describe("formatInitialRegion", () => {
  const result = {
    latitude: 48.856614,
    latitudeDelta: 0.0922,
    longitude: 2.3522219,
    longitudeDelta: 0.05183658170914543,
  };

  it("should transform a Expo Location object to a `Region` for Google Maps", () => {
    const location = {
      coords: {
        accuracy: null,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 48.856614, // Paris
        longitude: 2.3522219,
        speed: null,
      },
      timestamp: 0,
    };

    expect(formatInitialRegion(location)).toEqual(result);
  });
});
