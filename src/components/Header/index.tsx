import { View, Text } from 'react-native';
import { Button } from '../Button';
import ArrowBack from '../../assets/svg/arrow_back.svg';
import styles from './styles';

type HeaderProps = {
  title: string;
  navigation: any;
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

export { Header };
