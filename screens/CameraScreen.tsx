import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";
import { Button, ActivityIndicator } from "react-native-paper";

import { Camera } from 'expo-camera';

import CameraComponent from "../components/CameraComponent";

export function CameraScreen() {
  const navigation = useNavigation();
  function navigateToDetails() {
    navigation.navigate("Details" as never);
  }

  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <ActivityIndicator animating={true} />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission}>Allow</Button>
      </View>
    );
  }

  return (
      <CameraComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
