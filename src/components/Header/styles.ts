import { StyleSheet } from 'react-native';
import THEME from '../../styles/theme';

const styles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      marginTop: 32,
      paddingVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      position: 'absolute',
      left: 16,
      //top: 20,
    },
    text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    box_profile: {
      flexDirection: 'row',
      marginLeft: 16,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
    },
    profile_image: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: THEME.BACKGROUND_COLOR.LIGHT_WHITE,
    },
    profile_text: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.WHITE,
    },
    alert_icon: {
      marginRight: 16,
    },
  });

export default styles;
