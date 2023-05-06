import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.primary,
  },

  blob: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },

  icon: {
    width: 270,
    height: 290,
    marginTop: 200,
  },

  logo: {
    width: 170,
    marginTop: 100,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },

  titleContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  textBox: {
    width: 225,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -90,
  },
  title: {
    fontSize: 18,
    color: COLORS.white,
    lineHeight: 30,
    fontWeight: 400,
  },
  titleBold: {
    fontWeight: 700,
  },
  buttonBox: {
    width: "100%",
    height: "100%",
    marginTop: -60,
    justifyContent: "center",
    alignItems: "center",
  },
});
