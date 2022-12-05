import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

type CardButtonProps = {
  title: string;
  description?: string;
  onPressAction: (event: GestureResponderEvent) => any;
};

const CardButton = ({ title, description, onPressAction }: CardButtonProps) => {
  return (
    <TouchableOpacity onPress={onPressAction} style={styles().container}>
      {!!title && <Text style={styles().title}>{title}</Text>}
      {!!description && <Text style={styles().description}>{description}</Text>}
    </TouchableOpacity>
  );
};

export { CardButton };
