import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '90%',
    },
    label: {
      marginLeft: 5,
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    containerLabelInput: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  });
