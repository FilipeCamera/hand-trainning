import { View } from 'react-native';
import styles from './styles';
import LogoText from '../../assets/svg/logotext.svg';
import Button from '../../components/Button';
import LinearBackground from '../../components/LinearBackground';
import Scroll from '../../components/Scroll';
import { responsive } from '../../utils';
import { RunnerGirl } from '../../constants';

export default function Initial({ navigation }) {
  return (
    <LinearBackground>
      <Scroll showsVerticalScrollIndicator={false}>
        <LogoText style={styles.logo_text} width={responsive(220)} />
        <RunnerGirl style={styles.girl_runner} width={responsive(200)} />
        <View style={styles.buttons}>
          <Button
            title="Começar"
            marginVertical={4}
            onPress={() => navigation.navigate('Registrar')}
          />
          <Button
            title="Já tenho uma conta"
            secundary
            marginVertical={4}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </Scroll>
    </LinearBackground>
  );
}
