import { SafeAreaView } from 'react-native';
import { HeaderProfile, HeroTechnical, Scroll, Space } from '../../components';
import { TopLinear } from '../../constants';
import { styles } from './styles';

export default function Profile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Scroll showsVerticalScrollIndicator={false}>
        <TopLinear style={styles.top_linear} height={280} />
        <Space value={32} />
        <HeaderProfile title="Filipe Camera" />
        <Space value={16} />
        <HeroTechnical navigation={navigation} />
      </Scroll>
    </SafeAreaView>
  );
}
