import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";

import GoogleIcon from "../../assets/svg/google.svg";
import FacebookIcon from "../../assets/svg/facebook.svg";

interface ButtonOutlineProps extends TouchableOpacityProps {
  title: string;
  facebook?: boolean;
  google?: boolean;
}

export default function ButtonOutline({
  title,
  google,
  facebook,
  ...props
}: ButtonOutlineProps) {
  return (
    <TouchableOpacity {...props} style={styles().container}>
      {!!facebook && <FacebookIcon style={styles().icon} />}
      {!!google && <GoogleIcon style={styles().icon} />}
      <Text style={styles().text}>{title}</Text>
    </TouchableOpacity>
  );
}
