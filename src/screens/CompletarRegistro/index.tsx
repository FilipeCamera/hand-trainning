import { Header, Scroll, Space, Label, Input } from '../../components';

export default function CompletarRegistro({ navigation }) {
  return (
    <>
      <Header title="Completar Registro" navigation={navigation} />
      <Scroll>
        <Space value={16} />
        <Label title="Perfil" />
        <Space value={8} />
        <Input placeholder="Nome Completo" />
        <Space value={16} />
        <Label title="Informações do aluno" />
      </Scroll>
    </>
  );
}
