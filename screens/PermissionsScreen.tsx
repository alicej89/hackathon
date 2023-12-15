import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function PermissionsScreen({ navigation}) {
  
    // const navigation = useNavigation();
    function navigateToCamera() {
        // navigation.navigate("Camera" as never);
        navigation.replace("Camera" as never);
    }

  return (

      <View style={styles.content}>
        <Text variant="headlineSmall">Permissions</Text>
        <Text variant="bodyLarge">In order to use PAM Track, you need to allow the application access to the device camera and geolocation.</Text>
        <Button onPress={navigateToCamera}
          style={styles.submitButton}
          mode="contained"
        >
          Allow
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "purple",
    height: "40%",
    justifyContent: "center"
  },
  title: {
    color: "white",
    margin: 24,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  content: {
    padding: 16
  },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16
  },
  tocText: {
    textAlign: "center",
    fontSize: 14,
    color: "#9CA3AF"
  }
});
