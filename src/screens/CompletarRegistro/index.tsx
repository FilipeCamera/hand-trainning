import { Header, Scroll, Space, Label, Input, Row, SmallInput } from '../../components';

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
        <Space value={8} />
        <Row justify="space-around">
          <SmallInput placeholder="Idade" />
          <SmallInput placeholder="Peso" />
          <SmallInput placeholder="Altura" />
        </Row>
        <Space value={16} />
        <Label title="Problemas de saúde" />
      </Scroll>
    </>
  );
}
