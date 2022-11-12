import { View } from 'react-native';
import styles from './styles';

type SpaceProps = {
  value: number;
};

export default function Space({ value }: SpaceProps) {
  return <View style={styles(value).container} />;
}
