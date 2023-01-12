import {
  Label,
  Row,
  SmallInput,
  Space,
  CheckLabel,
  CheckLabelInput,
  Input,
  SexPicker,
} from '../../components';

const AlunoRegistro = () => {
  return (
    <>
      <Label title="Dados do aluno" />
      <Space value={8} />
      <SexPicker />
      <Space value={8} />
      <Row justify="space-around">
        <SmallInput placeholder="Idade" />
        <SmallInput placeholder="Peso" />
        <SmallInput placeholder="Altura" />
      </Row>
      <Space value={16} />
      <Label title="Problemas de saúde" />
      <Space value={8} />
      <CheckLabel label="Diabetes" />
      <Space value={5} />
      <CheckLabel label="Obesidade" />
      <Space value={5} />
      <CheckLabelInput label="Lesão" />
      <Space value={5} />
      <CheckLabel label="Hipertensão" />
      <Space value={5} />
      <CheckLabel label="Artrite" />
      <Space value={5} />
      <CheckLabel label="Artrose" />
      <Space value={5} />
      <CheckLabel label="Colesterol Alto" />
      <Space value={5} />
      <CheckLabel label="Câncer" />
      <Space value={5} />
      <CheckLabelInput label="Doenças Respiratórias" />
      <Space value={5} />
      <CheckLabelInput label="Outros" />
      <Space value={5} />
    </>
  );
};

const TreinadorRegistro = () => {
  return (
    <>
      <Label title="Informações do treinador" />
      <Space value={8} />
      <Input placeholder="Formação acadêmica" />
      <Space value={5} />
      <Input placeholder="Insituição de formação" />
      <Space value={5} />
      <Input placeholder="Nível de experiência" />
      <Space value={5} />
      <Input placeholder="Especialidades" />
    </>
  );
};

export { AlunoRegistro, TreinadorRegistro };
