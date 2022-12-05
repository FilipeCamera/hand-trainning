import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '90%',
    },
    text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.TEXT_COLOR.BLUE_DARK,
      marginLeft: 8,
    },
    line: {
      borderWidth: 1,
      borderColor: THEME.BORDER_COLOR.GRAY_LIGHT,
      width: '100%',
      borderStyle: 'dashed',
    },
  });
