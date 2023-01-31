import { View, Text } from 'react-native';
import { HeaderSimple, Scroll, Search, Space } from '../../components';
import { styles } from './styles';

export default function AddTrainner({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <HeaderSimple title="Procurar Treinador" />
        <Space value={6} />
        <Search placeholder="Procurar por" onFunction={() => {}} />
      </View>
      <Scroll>
        <Text>Nenhum treinador cadastrado</Text>
      </Scroll>
    </View>
  );
}
