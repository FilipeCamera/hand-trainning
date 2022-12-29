import { Picker } from '@react-native-picker/picker';
import { useRef, useState } from 'react';
import { styles } from './styles';
import THEME from '../../styles/theme';

const useSexPicker = () => {
  const sexRef = useRef();
  const [sex, setSex] = useState('');

  const handleChange = (itemValue: string) => {
    setSex(itemValue);
  };

  return { sexRef, sex, handleChange };
};

const SexPicker = () => {
  const { sexRef, sex, handleChange } = useSexPicker();
  return (
    <Picker
      ref={sexRef}
      selectedValue={sex}
      onValueChange={handleChange}
      style={styles().container}
      dropdownIconColor={THEME.TEXT_COLOR.BLUE_DARK}
      dropdownIconRippleColor={THEME.TEXT_COLOR.BLUE_DARK}
      mode="dialog"
    >
      <Picker.Item label="Masculino" value="masculino" style={styles().item_container} />
      <Picker.Item label="Feminino" value="feminino" style={styles().item_container} />
      <Picker.Item label="Não Binário" value="nao binario" style={styles().item_container} />
    </Picker>
  );
};

export { SexPicker };
