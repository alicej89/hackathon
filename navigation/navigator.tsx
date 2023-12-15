import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PermissionsScreen } from "../screens/PermissionsScreen";
import { CameraScreen } from "../screens/CameraScreen";
import { DetailsScreen } from "../screens/DetailsScreen";
import { MapScreen } from "../screens/MapScreen";

interface NavigatorProps {}

const Stack = createNativeStackNavigator();

export function Navigator(props: NavigatorProps) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Permissions">
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
