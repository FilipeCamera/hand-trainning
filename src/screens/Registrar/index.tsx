import { View, Text } from "react-native";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Scroll from "../../components/Scroll";
import Space from "../../components/Space";
import Line from "../../assets/svg/line.svg";
import { styles } from "./styles";
import ButtonOutline from "../../components/ButtonOutline";

// TODO: finalizar a tela de registrar adicionando os últimos componentes

export default function Registrar({ navigation }) {
  return (
    <View style={styles().container}>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header title="Registrar" navigation={navigation} />
        <Space value={16} />
        <Input placeholder="E-mail" />
        <Space value={5} />
        <Input placeholder="Senha" />
        <Space value={5} />
        <Input placeholder="Confimar senha" />
        <Space value={28} />
        <View style={styles().button_full}>
          <Button title="Cadastrar" secundary common />
        </View>
        <Space value={8} />
        <View style={styles().box_button_login}>
          <Text style={styles().text_login}>Já possui uma conta?</Text>
          <Button
            title=""
            icon={<Text style={styles().text_login_button}>Faça o login</Text>}
          />
        </View>
        <View style={styles().box_text_line}>
          <Line width={140} />
          <Text style={styles().text_or}>OU</Text>
          <Line width={140} />
        </View>
        <View style={styles().box_button_register}>
          <ButtonOutline google title="Sign up with Google" />
          <ButtonOutline facebook title="Sign up with Facebook" />
        </View>
      </Scroll>
    </View>
  );
}
