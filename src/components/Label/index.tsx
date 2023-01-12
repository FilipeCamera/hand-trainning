import { View, Text } from 'react-native';
import { styles } from './styles';
import { Line } from '../../constants';

type LabelProps = {
  title: string;
};

const Label = ({ title }: LabelProps) => {
  return (
    <View style={styles().container}>
      <Text style={styles().text}>{title}</Text>
      <Line />
    </View>
  );
};

export { Label };
