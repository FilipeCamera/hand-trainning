import { View, Text } from "react-native";
import Button from "../Button";
import ArrowBack from "../../assets/svg/arrow_back.svg";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles().container}>
      <View style={styles().icon}>
        <Button title="" icon={<ArrowBack />} />
      </View>
      <Text style={styles().text}>{title}</Text>
    </View>
  );
}
