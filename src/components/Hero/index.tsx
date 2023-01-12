import { View, Text } from 'react-native';
import { ButtonRounded } from '../Button';
import { styles } from './styles';
import { WarningGirl } from '../../constants';
import { Space } from '../Space';

const HeroTrainningCard = () => {
  return (
    <View style={styles().container}>
      <View style={styles().header_card}>
        <Text style={styles().header_card_title}>Seu Treino</Text>
        <ButtonRounded title="Escolher personal" />
      </View>
      <Space value={16} />
      <View style={styles().body_card}>
        <WarningGirl />
        <Space value={12} />
        <Text style={styles().body_card_title}>Treino não encontrado</Text>
      </View>
    </View>
  );
};

export { HeroTrainningCard };
