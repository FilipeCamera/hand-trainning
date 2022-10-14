import { View, Dimensions } from "react-native";
import styles from "./styles";
import LogoText from "../../assets/svg/logotext.svg";
import RunnerGirl from "../../assets/svg/runner_girl.svg";
import Button from "../../components/Button";
import LinearBackground from "../../components/LinearBackground";
import Scroll from "../../components/Scroll";

const responsiveWidth = (value: number) => {
  const widthUI = 414;
  const { width } = Dimensions.get("screen");
  return (width * value) / widthUI;
};

export default function Initial({ navigation }) {
  return (
    <LinearBackground>
      <Scroll showsVerticalScrollIndicator={false}>
        <LogoText style={styles.logo_text} width={responsiveWidth(220)} />
        <RunnerGirl style={styles.girl_runner} width={responsiveWidth(200)} />
        <View style={styles.buttons}>
          <Button
            title="Começar"
            marginVertical={4}
            onPress={() => navigation.navigate("Registrar")}
          />
          <Button title="Já tenho uma conta" outlined marginVertical={4} />
        </View>
      </Scroll>
    </LinearBackground>
  );
}
