import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import * as Location from "expo-location";

export function PermissionsScreen({ navigation }: any) {
  function navigateToCamera() {
    navigation.replace("Camera" as never);
  }

  const [locationStatus, setLocationStatus] =
    React.useState<Location.PermissionStatus | null>(null);

  const handleRequestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    }

    setLocationStatus(status);
  };

  return (
    <View style={styles.content}>
      <Text variant="headlineSmall">Permissions</Text>
      <Text variant="bodyLarge">
        In order to use PAM Track, you need to allow the application access to
        the device camera and geolocation.
      </Text>
      {/* TODO: migrated permissions here */}
      <Button
        onPress={() =>
          Alert.alert(
            "Allow",
            "Allow the application access to the device camera and geolocation."
          )
        }
        style={styles.submitButton}
        mode="outlined"
      >
        Allow
      </Button>
      <Text variant="bodyLarge">
        The application will not share your location with anyone.
      </Text>
      <Button
        onPress={handleRequestPermission}
        style={styles.submitButton}
        mode="outlined"
      >
        Ask Location permission
      </Button>

      {locationStatus === "granted" && (
        <Button
          onPress={navigateToCamera}
          style={styles.submitButton}
          mode="contained"
        >
          Go to Camera
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "purple",
    height: "40%",
    justifyContent: "center",
  },
  title: {
    color: "white",
    margin: 24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    padding: 16,
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: "#9CA3AF",
  },
});
