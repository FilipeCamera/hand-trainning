import { TextInput, TextInputProps } from "react-native";
import THEME from "../../styles/theme";
import { styles } from "./styles";

interface InputProps extends TextInputProps {}

export default function Input({ ...props }: InputProps) {
  return (
    <TextInput
      {...props}
      style={styles().container}
      placeholderTextColor={THEME.TEXT_COLOR.GRAY}
    />
  );
}
