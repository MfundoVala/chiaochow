import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export default StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  blob: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    marginTop: -30,
  },

  icon: {
    width: 130,
    height: 300,
    position: "absolute",
    top: 100,
    right: 40,
  },

  heading: {
    ...FONTS.title,
    color: COLORS.white,
    zIndex: 9999,
    position: "absolute",
    top: 280,
    left: 20,
  },

  form: {
    width: "100%",
    height: "50%",
    padding: 25,
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 40,
  },

  label: {
    ...FONTS.h2,
    marginBottom: 5,
  },

  input: {
    width: 335,
    height: 50,
    backgroundColor: COLORS.grayVariant,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 15,
    color: COLORS.black,
  },

  forgotPassword: {
    color: COLORS.secondary,
    ...FONTS.h4,
  },

  registerText: {
    color: COLORS.secondary,
    ...FONTS.h3,
  },
});
