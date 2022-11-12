import { TextInput, TextInputProps } from 'react-native';
import THEME from '../../styles/theme';
import styles from './styles';

type InputProps = {} & TextInputProps;

export default function Input({ ...props }: InputProps) {
  return (
    <TextInput
      {...props}
      style={styles().container}
      placeholderTextColor={THEME.TEXT_COLOR.BLUE_DARK}
    />
  );
}
