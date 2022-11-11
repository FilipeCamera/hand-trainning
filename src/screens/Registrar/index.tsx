import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text } from 'react-native';

import Line from '../../assets/svg/line.svg';
import Button from '../../components/Button';
import ButtonOutline from '../../components/ButtonOutline';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Scroll from '../../components/Scroll';
import Space from '../../components/Space';
import { styles } from './styles';

export default function Registrar({ navigation }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles().container}>
        <Scroll showsVerticalScrollIndicator={false}>
          <Header title="Registrar" navigation={navigation} />
          <Space value={16} />
          <Input placeholder="E-mail" value={email} onChangeText={(e: string) => setEmail(e)} />
          <Space value={5} />
          <Input
            placeholder="Senha"
            value={password}
            secureTextEntry
            onChangeText={(e: string) => setPassword(e)}
          />
          <Space value={5} />
          <Input
            placeholder="Confirmar senha"
            value={confirmPassword}
            secureTextEntry
            onChangeText={(e: string) => setConfirmPassword(e)}
          />
          <Space value={28} />
          <View style={styles().button_full}>
            <Button title="Cadastrar" secundary common />
          </View>
          <Space value={8} />
          <View style={styles().box_button_login}>
            <Text style={styles().text_login}>Já possui uma conta?</Text>
            <Button
              onPress={() => navigation.navigate('Login')}
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
            <ButtonOutline disabled google title="Sign up with Google" />
            <ButtonOutline disabled facebook title="Sign up with Facebook" />
          </View>
        </Scroll>
      </View>
    </>
  );
}
