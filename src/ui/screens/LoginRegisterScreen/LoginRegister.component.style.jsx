import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../theme";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width,
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
    marginTop: -20,
  },

  iconContainer: {
    position: "absolute",
    top: 80,
    right: 40,
  },

  icon: {
    width: 130,
    height: 300,
    position: "relative",
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
    width: width,
    height: height / 2,
    padding: 25,
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    bottom: 40,
    backgroundColor: COLORS.white,
    zIndex: 9999,
  },

  label: {
    ...FONTS.h2,
    marginBottom: 5,
    marginLeft: width / 25,
  },

  input: {
    width: 335,
    height: 50,
    backgroundColor: COLORS.grayVariant,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 15,
    color: COLORS.black,
    fontFamily: "Inter",
    alignSelf: "center",
  },

  forgotPassword: {
    color: COLORS.secondary,
    ...FONTS.h4,
  },

  registerText: {
    color: COLORS.secondary,
    ...FONTS.h3,
  },

  showPasswordIcon: {
    width: 25,
    height: 18,
    marginTop: 15,
    marginRight: 20,
  },
});
