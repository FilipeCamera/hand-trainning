import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = (secundary: boolean, common?: boolean, marginVertical?: number, icon?: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: icon
        ? ''
        : secundary
        ? common
          ? THEME.BACKGROUND_COLOR.BLUE
          : THEME.BACKGROUND_COLOR.WHITE
        : THEME.BACKGROUND_COLOR.BLUE_DARK,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      height: icon ? 24 : 56,
      marginVertical,
      borderWidth: !!icon || common ? 0 : 1,
      borderColor: secundary ? THEME.BORDER_COLOR.BLUE_LIGHT : THEME.BORDER_COLOR.BLUE_DARKNESS,
      elevation: common ? 4 : 0,
    },
    text: {
      fontSize: THEME.FONT_SIZE.SM,
      fontFamily: secundary ? THEME.FONT_FAMILY[500] : THEME.FONT_FAMILY[600],
      color: secundary
        ? common
          ? THEME.TEXT_COLOR.WHITE
          : THEME.TEXT_COLOR.BLUE_DARK
        : THEME.TEXT_COLOR.WHITE,
    },
  });

export default styles;
