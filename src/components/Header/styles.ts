import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 32,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      position: 'absolute',
      left: 16,
      //top: 20,
    },
    text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
  });
