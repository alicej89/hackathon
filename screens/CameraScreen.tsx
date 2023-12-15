import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";

import { Camera as CameraExpo } from "expo-camera";

import { Camera } from "../components/Camera";

export function CameraScreen() {
  const navigation = useNavigation();
  function navigateToDetails() {
    navigation.navigate("Details" as never);
  }

  const [permission, requestPermission] = CameraExpo.useCameraPermissions();

  if (!permission) {
    return <ActivityIndicator animating={true} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission}>Allow</Button>
      </View>
    );
  }

  return (
    <>
      <Camera />
      {__DEV__ && <Button onPress={navigateToDetails}>Go to Details</Button>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
