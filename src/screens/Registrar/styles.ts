import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
      flex: 1,
    },
    button_full: {
      width: '90%',
    },
    box_button_login: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 24,
    },
    text_login: {
      fontFamily: THEME.FONT_FAMILY[400],
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    text_login_button: {
      fontFamily: THEME.FONT_FAMILY[500],
      color: THEME.TEXT_COLOR.BLUE,
      marginLeft: 5,
    },
    box_text_line: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '90%',
      marginVertical: 8,
    },
    text_or: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    box_button_register: {
      flexDirection: 'column',
      width: '90%',
      marginVertical: 32,
    },
  });

export default styles;
