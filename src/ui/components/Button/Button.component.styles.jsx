import { StyleSheet } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    height: 54,
    borderRadius: 10,
    backgroundColor: COLORS.white,
  },

  greenButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 335,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    ...SHADOW,
  },

  buttonText: {
    color: COLORS.white,
    ...FONTS.btn,
    fontFamily: "InterMedium",
  },
});
