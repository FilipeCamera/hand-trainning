import { View } from "react-native";
import { styles } from "./styles";

interface SpaceProps {
  value: number;
}

export default function Space({ value }: SpaceProps) {
  return <View style={styles(value).container} />;
}
