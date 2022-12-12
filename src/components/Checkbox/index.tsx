import Checkbox from 'expo-checkbox';
import { useState, Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import THEME from '../../styles/theme';
import { Input } from '../Input';
import { styles } from './styles';

type CheckLabelProps = {
  label: string;
};

type CheckProps = {
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
};

const useCheck = () => {
  const [isChecked, setIsChecked] = useState(false);

  return { isChecked, setIsChecked };
};

const Check = ({ isChecked, setIsChecked }: CheckProps) => {
  return (
    <Checkbox
      value={isChecked}
      onValueChange={setIsChecked}
      color={isChecked ? THEME.BACKGROUND_COLOR.BLUE : THEME.BORDER_COLOR.GRAY_LIGHT}
    />
  );
};

const CheckLabel = ({ label }: CheckLabelProps) => {
  const { isChecked, setIsChecked } = useCheck();
  return (
    <View style={styles().container}>
      <Check isChecked={isChecked} setIsChecked={setIsChecked} />
      <Text style={styles().label}>{label}</Text>
    </View>
  );
};

const CheckLabelInput = ({ label }: CheckLabelProps) => {
  const { isChecked, setIsChecked } = useCheck();
  return (
    <View style={styles().containerLabelInput}>
      <View style={styles().container}>
        <Check isChecked={isChecked} setIsChecked={setIsChecked} />
        <Text style={styles().label}>{label}</Text>
      </View>
      {!!isChecked && <Input placeholder="escreva aqui" />}
    </View>
  );
};

export { CheckLabel, CheckLabelInput };
