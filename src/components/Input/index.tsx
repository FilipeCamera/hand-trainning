import { TextInput, TextInputProps } from 'react-native';
import THEME from '../../styles/theme';
import styles from './styles';

type InputProps = {} & TextInputProps;

const SmallInput = ({ ...props }: InputProps) => {
  return (
    <TextInput
      {...props}
      style={styles(true).container}
      placeholderTextColor={THEME.TEXT_COLOR.BLUE_DARK}
    />
  );
};

const Input = ({ ...props }: InputProps) => {
  return (
    <TextInput
      {...props}
      style={styles().container}
      placeholderTextColor={THEME.TEXT_COLOR.BLUE_DARK}
    />
  );
};

export { Input, SmallInput };
