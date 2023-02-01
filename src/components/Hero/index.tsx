import { View, Text } from 'react-native';
import { ButtonRounded } from '../Button';
import { styles } from './styles';
import { WarningGirl } from '../../constants';
import { Space } from '../Space';

type HeroProps = {
  navigation?: any;
};

const HeroTrainningCard = ({ navigation }: HeroProps) => {
  return (
    <View style={styles().container}>
      <View style={styles().header_card}>
        <Text style={styles().header_card_title}>Seu Treino</Text>
        <ButtonRounded
          title="Escolher personal"
          onPress={() => navigation.navigate('Add Treinador')}
        />
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

const HeroTechnical = ({ navigation }: HeroProps) => {
  return (
    <View style={styles().container_technical}>
      <View style={styles().technical_header}>
        <Text style={styles().technical_header_title}>Meus Dados</Text>
        <ButtonRounded title="Editar meus dados" />
      </View>
      <View></View>
    </View>
  );
};

export { HeroTrainningCard, HeroTechnical };
