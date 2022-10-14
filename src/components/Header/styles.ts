import { StyleSheet } from "react-native";
import THEME from "../../styles/theme";

export const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      marginTop: 32,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontFamily: THEME.FONT_FAMILY[600],
      fontSize: THEME.FONT_SIZE.LG,
      color: THEME.TEXT_COLOR.GREEN,
    },
  });
