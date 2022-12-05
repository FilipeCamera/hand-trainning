import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RunnerGirl } from '../../constants';
import { responsive } from '../../utils';
import { CardButton } from '../CardButton';
import { LinearBackground } from '../LinearBackground';
import { Space } from '../Space';
import { StepsProgress } from './StepsProgress';
import { styles } from './styles';

type StepsProps = {
  stage: number;
  onStage: React.Dispatch<React.SetStateAction<number>>;
  navigation: any;
};

type useStepsProps = {
  stage: number;
  onStage: React.Dispatch<React.SetStateAction<number>>;
};

const useSteps = ({ stage, onStage }: useStepsProps) => {
  const [title, setTitle] = useState<string>('Escolha seu perfil');
  console.log(stage);
  const handlePress = (value: string, navigation?: any) => {
    if (stage < 2) onStage(stage + 1);
    console.log(value);
    if (navigation) navigation.navigate('CompletarRegistro');
  };
  useEffect(() => {
    if (stage === 1) {
      setTitle('Escolha o seu plano');
    }
  }, [stage]);

  return { title, handlePress };
};

const Steps = ({ stage, onStage, navigation }: StepsProps) => {
  const { title, handlePress } = useSteps({ stage, onStage });

  return (
    <LinearBackground>
      <RunnerGirl style={styles().runner_girl} width={responsive(200)} />
      <Space value={24} />
      <View style={styles().container}>
        <Text style={styles().title}>{title}</Text>
        <Space value={16} />
        {!!stage && stage == 2 && (
          <>
            <CardButton
              title="Plano Básico"
              description="Plano gratuito, contendo propagandas."
              onPressAction={() => handlePress('basic', navigation)}
            />
            <Space value={6} />
            <CardButton
              title="Plano Individual"
              description="Plano pago, não contém propaganda"
              onPressAction={() => handlePress('individual', navigation)}
            />
          </>
        )}
        {!!stage && stage == 1 && (
          <>
            <CardButton title="Aluno" onPressAction={() => handlePress('Aluno')} />
            <Space value={6} />
            <CardButton title="Treinador" onPressAction={() => handlePress('Treinador')} />
          </>
        )}
      </View>
      <StepsProgress stage={stage} />
    </LinearBackground>
  );
};

export { Steps };
