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
    text_simple: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.BLUE,
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
    container_pr: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    box_name_profile: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: THEME.BACKGROUND_COLOR.BLUE_MEDIUM,
      paddingHorizontal: 24,
      paddingVertical: 4,
      borderRadius: 99,
    },
    name_profile_text: {
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.WHITE,
    },
    box_image_profile: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
      borderWidth: 2,
      borderColor: THEME.BORDER_COLOR.WHITE,
    },
  });

export default styles;
