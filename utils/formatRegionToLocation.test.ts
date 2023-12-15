import getTime from "date-fns/getTime";

import { formatRegionToLocation } from "./formatRegionToLocation";

describe("formatRegionToLocation", () => {
  it("should return a location object", () => {
    const input = {
      latitude: 43.56060145158128,
      latitudeDelta: 2.6604170080754344,
      longitude: 4.486549459397793,
      longitudeDelta: 2.9951544106006627,
    };

    const expected = {
      timestamp: getTime(new Date()),
      coords: {
        latitude: 43.56060145158128,
        longitude: 4.486549459397793,
        altitude: null,
        accuracy: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
    };

    const actual = formatRegionToLocation(input);
    expect(actual.coords).toEqual(expected.coords);
  });
});
