import { View } from 'react-native';
import { Label } from '../Label';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { styles } from './styles';

const CardMap = () => {
  return (
    <View style={styles.container}>
      <Label title="Academias próximas" />
      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        style={styles.mapping}
        loadingEnabled
      ></MapView>
    </View>
  );
};

export { CardMap };
