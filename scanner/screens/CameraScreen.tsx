import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';

interface CameraScreenProps {}

export function CameraScreen(props: CameraScreenProps) {
  const navigation = useNavigation();
  function navigateToDetails() {
    navigation.navigate("Details" as never);
  }
  
  
  return (
    <View>
      <Text>CameraScreen</Text>
      <Button onPress={navigateToDetails}>
          Go to Details
        </Button>
    </View>
  )
}
