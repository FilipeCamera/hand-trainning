import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = (secundary?: boolean, common?: boolean, marginVertical?: number, icon?: any) =>
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
      width: secundary && common ? '100%' : null,
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
    container_outline: {
      width: '100%',
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      borderWidth: 1,
      marginVertical: 4,
      borderColor: THEME.BORDER_COLOR.GRAY_LIGHT,
    },
    text_outline: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    icon: {
      position: 'absolute',
      left: 22,
    },
    container_rounded: {
      width: 160,
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 99,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: THEME.BACKGROUND_COLOR.BLUE_MEDIUM,
    },
    button_rounded_text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM_MIN,
      color: THEME.TEXT_COLOR.WHITE,
    },
  });

export default styles;
