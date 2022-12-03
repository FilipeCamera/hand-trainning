import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    runner_girl: {
      position: 'absolute',
      top: 126,
      right: 16,
    },
    title: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.WHITE,
    },
  });
