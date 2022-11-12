import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME.BACKGROUND_COLOR.LIGHT_WHITE,
      borderRadius: 10,
      width: '90%',
      height: 56,
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.BLUE_DARK,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
  });

export default styles;
