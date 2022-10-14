import { View, Text } from "react-native";
import Header from "../../components/Header";
import LinearBackground from "../../components/LinearBackground";
import Scroll from "../../components/Scroll";

export default function Registrar() {
  return (
    <LinearBackground>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header title="Registrar" />
      </Scroll>
    </LinearBackground>
  );
}
