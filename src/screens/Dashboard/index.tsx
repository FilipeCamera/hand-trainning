import { View } from 'react-native';
import { styles } from './styles';
import { CommonBottomTabs } from '../../components';
import { CommonFeatures } from '../../features/tabs';

export default function Dashboard() {
  return (
    <View style={styles().container}>
      <CommonBottomTabs views={CommonFeatures} />
    </View>
  );
}
