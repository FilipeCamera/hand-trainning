import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

type ButtonProps = {
  title: string;
  secundary?: boolean;
  common?: boolean;
  marginVertical?: number;
  icon?: any;
} & TouchableOpacityProps;

export default function Button({
  title,
  secundary,
  icon,
  common,
  marginVertical,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity {...props} style={styles(secundary, common, marginVertical, icon).container}>
      {icon ? icon : <Text style={styles(secundary, common).text}>{title}</Text>}
    </TouchableOpacity>
  );
}
