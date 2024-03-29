import { View, Text } from 'react-native';
import { Button } from '../Button';
import ArrowBack from '../../assets/svg/arrow_back.svg';
import styles from './styles';
import { AlertIconWhite } from '../../constants';
import { Space } from '../Space';

type HeaderProps = {
  title?: string;
  navigation?: any;
};

const Header = ({ title, navigation }: HeaderProps) => {
  return (
    <View style={styles().container}>
      <View style={styles().icon}>
        <Button title="" icon={<ArrowBack />} onPress={() => navigation.goBack()} />
      </View>
      <Text style={styles().text}>{title}</Text>
    </View>
  );
};

const HeaderInfo = ({ navigation }: HeaderProps) => {
  return (
    <View style={styles().container}>
      <View style={styles().box_profile}>
        <View style={styles().profile_image}></View>
        <Space value={4} direction="horizontal" />
        <Text style={styles().profile_text}>Hanna Clara</Text>
      </View>
      <Button
        title=""
        icon={<AlertIconWhite style={styles().alert_icon} width={24} height={24} />}
        onPress={() => navigation.navigate('Treino')}
      />
    </View>
  );
};

const HeaderSimple = ({ title }: HeaderProps) => {
  return (
    <View style={styles().container}>
      <Text style={styles().text_simple}>{title}</Text>
    </View>
  );
};

const HeaderProfile = ({ title }: HeaderProps) => {
  return (
    <View style={styles().container_pr}>
      <View style={styles().box_name_profile}>
        <Text style={styles().name_profile_text}>{title}</Text>
      </View>
      <Space value={24} />
      <View style={styles().box_image_profile}></View>
    </View>
  );
};

export { Header, HeaderInfo, HeaderSimple, HeaderProfile };
