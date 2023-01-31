import { TextInput, View } from 'react-native';
import { SearchIcon } from '../../constants';
import { styles } from './styles';
import { Space } from '../Space';
import THEME from '../../styles/theme';

type SearchProps = {
  placeholder: string;
  onFunction: (e: string) => any;
};

const Search = ({ placeholder, onFunction }: SearchProps) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <Space value={4} direction="horizontal" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onFunction}
        placeholderTextColor={THEME.TEXT_COLOR.BLUE_LIGHT}
      />
    </View>
  );
};

export { Search };
