import { View } from 'react-native';
import styles from './styles';

type SpaceProps = {
  value: number;
};

const Space = ({ value }: SpaceProps) => {
  return <View style={styles(value).container} />;
};

export { Space };
