import { View, Text } from "react-native";
import LinearBackground from "../../components/LinearBackground";
import Scroll from "../../components/Scroll";

export default function Registrar() {
  return (
    <LinearBackground>
      <Scroll showsVerticalScrollIndicator={false}>
        <Text>Registrar</Text>
      </Scroll>
    </LinearBackground>
  );
}
