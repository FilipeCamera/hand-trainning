import { View, Text } from 'react-native';
import { HeaderSimple, Scroll, Search, Space } from '../../components';
import { styles } from './styles';

export default function AddTrainner({ navigation }) {
  const trainner = false;
  return (
    <View style={styles.container}>
      <View>
        <HeaderSimple title="Procurar Treinador" />
        <Space value={6} />
        <Search
          placeholder="Procurar por"
          onFunction={(e) => {
            console.log(e);
          }}
        />
      </View>
      {!trainner && (
        <View style={styles.box_error}>
          <Text style={styles.error_title}>Nenhum treinador cadastrado</Text>
        </View>
      )}
    </View>
  );
}
