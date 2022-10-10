import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  outlined?: boolean;
  marginVertical?: number;
}

export default function Button({
  title,
  outlined,
  marginVertical,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={styles(outlined, marginVertical).container}
    >
      <Text style={styles(outlined).text}>{title}</Text>
    </TouchableOpacity>
  );
}
