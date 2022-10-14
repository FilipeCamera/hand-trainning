import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  outlined?: boolean;
  marginVertical?: number;
  icon?: any;
}

export default function Button({
  title,
  outlined,
  icon,
  marginVertical,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={styles(outlined, marginVertical, icon).container}
    >
      {!!icon ? icon : <Text style={styles(outlined).text}>{title}</Text>}
    </TouchableOpacity>
  );
}
