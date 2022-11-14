import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.BLUE_DARK,
      marginTop: 32,
      marginBottom: 12,
    },
    description: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.TEXT_COLOR.GRAY,
      width: '90%',
      textAlign: 'center',
    },
    buttonBottomRight: {
      position: 'absolute',
      bottom: 50,
      right: 16,
    },
    buttonText: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.MD,
      color: THEME.TEXT_COLOR.BLUE,
    },
  });

export default styles;
