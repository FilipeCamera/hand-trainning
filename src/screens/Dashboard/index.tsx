import { View, Text } from 'react-native';
import { styles } from './styles';
import { BottomTabs } from '../../components';

export default function Dashboard({ navigation }) {
  return (
    <View style={styles().container}>
      <BottomTabs />
    </View>
  );
}
