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
    progressBox: {
      flexDirection: 'row',
      alignItems: 'center',
      position: 'absolute',
      right: 0,
      bottom: 56,
    },
    progressWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    progressCircle: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressLine: {
      width: 56,
      height: 2,
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
    },
    progressText: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.BLUE,
    },
  });
