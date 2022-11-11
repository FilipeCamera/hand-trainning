import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderWidth: 1,
      marginVertical: 4,
      borderColor: THEME.BORDER_COLOR.GRAY_LIGHT,
    },
    text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    icon: {
      position: 'absolute',
      left: 22,
    },
  });

export default styles;
