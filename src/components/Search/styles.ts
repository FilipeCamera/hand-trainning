import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: THEME.BACKGROUND_COLOR.BLUE_LIGHT,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    fontFamily: THEME.FONT_FAMILY[500],
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.TEXT_COLOR.BLUE_DARK,
  },
});
