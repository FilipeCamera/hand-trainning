import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RunnerGirl } from '../../constants';
import { responsive } from '../../utils';
import CardButton from '../CardButton';
import LinearBackground from '../LinearBackground';
import Space from '../Space';
import { styles } from './styles';

type StepsProps = {
  stage: number;
  onStage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Steps({ stage, onStage }: StepsProps) {
  const [title, setTitle] = useState<string>('Escolha seu perfil');
  const handlePress = (value: string) => {
    onStage(stage + 1);
    console.log(value);
  };
  useEffect(() => {
    if (stage === 1) {
      setTitle('Escolha o seu plano');
    }
  }, [stage]);
  return (
    <LinearBackground>
      <RunnerGirl style={styles().runner_girl} width={responsive(200)} />
      <Space value={24} />
      <View style={styles().container}>
        <Text style={styles().title}>{title}</Text>
        <Space value={16} />
        <CardButton title="Aluno" onPressAction={() => handlePress('Aluno')} />
        <Space value={6} />
        <CardButton title="Treinador" onPressAction={() => handlePress('Treinador')} />
      </View>
    </LinearBackground>
  );
}
