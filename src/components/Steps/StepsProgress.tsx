import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

type StepsProgressProps = {
  stage: number;
};

const useProgress = (stage: number) => {
  const [progress, setProgress] = useState<number[]>([]);

  useEffect(() => {
    if (!progress.includes(stage) && stage < 3) {
      setProgress([...progress, stage]);
    }

    return () => setProgress([]);
  }, [stage]);

  return { progress };
};

const StepsProgress = ({ stage }: StepsProgressProps) => {
  const { progress } = useProgress(stage);
  return (
    <View style={styles().progressBox}>
      {progress.length > 0 &&
        progress.map((value, index) => {
          return (
            <>
              <View style={styles().progressCircle} key={index}>
                <Text style={styles().progressText}>{value}</Text>
              </View>
              <View style={styles().progressLine} />
            </>
          );
        })}
    </View>
  );
};

export { StepsProgress };
