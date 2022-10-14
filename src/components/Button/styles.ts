import { StyleSheet } from "react-native";
import THEME from "../../styles/theme";

export const styles = (
  outlined: boolean,
  marginVertical?: number,
  icon?: any
) =>
  StyleSheet.create({
    container: {
      backgroundColor: outlined || !!icon ? "" : THEME.BACKGROUND_COLOR.GREEN,
      borderWidth: outlined ? 1 : 0,
      borderColor: THEME.BORDER_COLOR.GREEN,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      height: !!icon ? 32 : 56,
      marginVertical,
    },
    text: {
      fontSize: THEME.FONT_SIZE.SM,
      fontFamily: outlined ? THEME.FONT_FAMILY[500] : THEME.FONT_FAMILY[600],
      color: outlined ? THEME.TEXT_COLOR.GREEN : THEME.TEXT_COLOR.WHITE,
    },
  });
