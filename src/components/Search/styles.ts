import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: THEME.BACKGROUND_COLOR.BLUE_LIGHT,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontFamily: THEME.FONT_FAMILY[500],
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.TEXT_COLOR.BLUE_DARK,
  },
});
