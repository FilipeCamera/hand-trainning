import { View, Text } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import LinearBackground from "../../components/LinearBackground";
import Scroll from "../../components/Scroll";
import Space from "../../components/Space";
import { styles } from "./styles";

export default function Registrar() {
  return (
    <LinearBackground>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header title="Registrar" />
        <Space value={16} />
        <Input placeholder="E-mail" />
        <Space value={5} />
        <Input placeholder="Senha" />
        <Space value={5} />
        <Input placeholder="Confimar senha" />
        <Space value={28} />
        <View style={styles().button_full}>
          <Button title="Cadastrar" />
        </View>
        <Space value={8} />
        <View>
          <Text>Já possui uma conta?</Text>
          <Button title="" icon={<Text>Faça o login</Text>} />
        </View>
      </Scroll>
    </LinearBackground>
  );
}
