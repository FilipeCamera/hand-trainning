import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.BACKGROUND_COLOR.BLACK_LOW_OPACITY,
      height: '100%',
      minHeight: 100,
      maxHeight: 160,
      borderRadius: 20,
    },
    title: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.TEXT_COLOR.WHITE,
    },
    description: {
      fontFamily: THEME.FONT_FAMILY[400],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.WHITE,
    },
  });
