import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS, SHADOW } from "../../theme";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width,
    height,
  },

  tabsContainer: {
    width,
    height: height / 14,
    borderBottomColor: COLORS.grayLight,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 70,
    paddingTop: 25,
  },

  tabText: {
    ...FONTS.h2,
    color: COLORS.black,
  },

  tabTextActive: {
    ...FONTS.h2,
    color: COLORS.secondary,
  },

  tabIndicator: {
    width: 80,
    height: 4,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 67,
  },

  bottomContainer: {
    width,
    height: height * 0.6,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    backgroundColor: COLORS.white,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  bottomNavContainer: {
    width,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    ...SHADOW,
  },

  descriptionContainer: {
    width,
    paddingHorizontal: 25,
    marginTop: 30,
    alignContent: "center",
  },

  titleContainer: {
    width: width,
    paddingHorizontal: 25,
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    ...FONTS.h1,
    color: COLORS.black,
  },

  favouriteIconContainer: {
    width: 31,
    height: 31,
    backgroundColor: "#000000",
    borderRadius: 10,
    opacity: 0.56,
    justifyContent: "center",
    alignItems: "center",
  },

  favouriteIcon: {
    width: 15,
    height: 13,
  },

  description: {
    ...FONTS.h3,
    color: COLORS.gray,
    marginTop: 10,
  },
});
