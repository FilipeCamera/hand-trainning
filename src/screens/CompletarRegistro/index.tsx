import { View } from 'react-native';
import { Header, Scroll, Space, Label, Input, Button, Row } from '../../components';
import { styles } from './styles';
import { AlunoRegistro, TreinadorRegistro } from './TipoRegistro';

export default function CompletarRegistro({ navigation }) {
  const profile = false;
  return (
    <View style={styles.container}>
      <Header title="Completar cadastro" navigation={navigation} />
      <Scroll showsVerticalScrollIndicator={false}>
        <Space value={16} />
        <Label title="Perfil" />
        <Space value={8} />
        <Input placeholder="Nome Completo" />
        <Space value={16} />
        {profile && <TreinadorRegistro />}
        {!profile && <AlunoRegistro />}
        <Space value={32} />
        <Row>
          <Button
            title="Finalizar"
            secundary
            common
            onPress={() => navigation.navigate('Dashboard')}
          />
        </Row>
      </Scroll>
    </View>
  );
}
