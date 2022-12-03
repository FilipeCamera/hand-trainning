import { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Steps from '../../components/Steps';
import { ManExercise } from '../../constants';
import styles from './styles';

export default function Onboarding() {
  const [steps, setSteps] = useState<number>(0);

  if (steps !== 0) {
    return <Steps stage={steps} onStage={setSteps} />;
  }
  return (
    <View style={styles().container}>
      <ManExercise />
      <Text style={styles().title}>Seja bem-vindo</Text>
      <Text style={styles().description}>
        Precisamos finalizar o seu cadastro, aperte em avançar para continuar!
      </Text>
      <View style={styles().buttonBottomRight}>
        <Button
          title=""
          icon={<Text style={styles().buttonText}>Avançar</Text>}
          onPress={() => setSteps(steps + 1)}
        />
      </View>
    </View>
  );
}
