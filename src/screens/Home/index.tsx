import { SafeAreaView } from 'react-native';
import { CardMap, HeaderInfo, HeroTrainningCard, Scroll, Space } from '../../components';
import { TopLinear } from '../../constants';
import { styles } from './styles';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Scroll showsVerticalScrollIndicator={false}>
        <TopLinear style={styles.top_linear} height={280} />
        <HeaderInfo navigation={navigation} />
        <Space value={12} />
        <HeroTrainningCard />
        <Space value={24} />
        <CardMap />
      </Scroll>
    </SafeAreaView>
  );
}
