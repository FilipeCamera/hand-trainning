import { StyleSheet } from "react-native";
import THEME from "../../styles/theme";

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME.BACKGROUND_COLOR.WHITE,
      flex: 1,
    },
    button_full: {
      width: "90%",
    },
    box_button_login: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 24,
    },
    text_login: {
      fontFamily: THEME.FONT_FAMILY[400],
      color: THEME.TEXT_COLOR.BLUE_DARK,
    },
    text_login_button: {
      fontFamily: THEME.FONT_FAMILY[500],
      color: THEME.TEXT_COLOR.BLUE,
      marginLeft: 5,
    },
  });
