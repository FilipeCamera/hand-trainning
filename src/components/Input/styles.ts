import { StyleSheet } from "react-native";
import THEME from "../../styles/theme";

export const styles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: THEME.BACKGROUND_COLOR.GREY,
      borderRadius: 10,
      width: "90%",
      height: 56,
      fontFamily: THEME.FONT_FAMILY[500],
      fontSize: THEME.FONT_SIZE.SM,
      color: THEME.TEXT_COLOR.GRAY,
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
  });
