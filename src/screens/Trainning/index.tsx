import { View } from 'react-native';
import MapView from 'react-native-maps';

export default function Trainning({ navigation }) {
  return (
    <View>
      <MapView style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
    </View>
  );
}
