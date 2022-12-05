import { View, Text } from 'react-native';
import { styles } from './styles';

type LabelProps = {
  title: string;
};

const Label = ({ title }: LabelProps) => {
  return (
    <View style={styles().container}>
      <Text style={styles().text}>{title}</Text>
      <View style={styles().line} />
    </View>
  );
};

export { Label };
