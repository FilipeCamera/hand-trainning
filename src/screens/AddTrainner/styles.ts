import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
    paddingHorizontal: 8,
    flex: 1,
  },
  box_error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error_title: {
    fontFamily: THEME.FONT_FAMILY[500],
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.TEXT_COLOR.GRAY,
  },
});
