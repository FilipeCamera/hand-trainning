import { View, Text } from 'react-native';
import ManExercise from '../../assets/svg/man_exercise.svg';
import Button from '../../components/Button';
import styles from './styles';

export default function Onboarding() {
  return (
    <View style={styles().container}>
      <ManExercise />
      <Text style={styles().title}>Seja bem-vindo</Text>
      <Text style={styles().description}>
        Precisamos finalizar o seu cadastro, aperte em avançar para continuar!
      </Text>
      <View style={styles().buttonBottomRight}>
        <Button title="" icon={<Text style={styles().buttonText}>Avançar</Text>} />
      </View>
    </View>
  );
}
