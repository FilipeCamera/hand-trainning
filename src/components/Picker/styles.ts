import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      width: '90%',
      backgroundColor: THEME.BACKGROUND_COLOR.LIGHT_WHITE,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    item_container: {
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
  });
