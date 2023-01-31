import { View } from 'react-native';
import { Label } from '../Label';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';

const CardMap = () => {
  return (
    <View style={styles.container}>
      <Label title="Academias próximas" />
      <MapView showsUserLocation={true} provider={PROVIDER_GOOGLE} style={styles.mapping}>
        <Marker coordinate={{ latitude: 0, longitude: 0 }} />
      </MapView>
    </View>
  );
};

export { CardMap };
