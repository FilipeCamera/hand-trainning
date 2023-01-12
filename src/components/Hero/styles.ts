import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'column',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header_card: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    header_card_title: {
      fontFamily: THEME.FONT_FAMILY[800],
      fontSize: THEME.FONT_SIZE.XL_G,
      maxWidth: 120,
      color: THEME.TEXT_COLOR.WHITE,
    },
    body_card: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body_card_title: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.BLUE_LIGHT,
    },
  });
