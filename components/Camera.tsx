import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

import { Camera as CameraExpo, CameraProps, CameraType } from "expo-camera";
import * as BarCodeScanner from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

export const Camera = (props: CameraProps) => {
  const [type, setType] = useState(CameraType.back);
  const [scanned, setScanned] = useState(false);

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const navigation = useNavigation<any>();
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("Details", { type, data });
  };

  return (
    <CameraExpo
      style={styles.camera}
      type={type}
      barCodeScannerSettings={{
        barCodeTypes: [
          BarCodeScanner.Constants.BarCodeType.qr,
          BarCodeScanner.Constants.BarCodeType.code128,
          BarCodeScanner.Constants.BarCodeType.datamatrix,
        ],
      }}
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      useCamera2Api
      {...props}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </CameraExpo>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
