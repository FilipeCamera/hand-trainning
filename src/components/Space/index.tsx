import { View } from 'react-native';
import styles from './styles';

type SpaceProps = {
  value: number;
  direction?: string;
};

const Space = ({ value, direction }: SpaceProps) => {
  return <View style={styles(value, direction).container} />;
};

export { Space };
