import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONTS } from "../../theme";
const { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: height * 0.43,
    position: "absolute",
    top: 0,
  },

  swiper: {
    zIndex: 999,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    width,
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 60,
    left: "45%",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: COLORS.gray,
  },

  activeDot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },

  chowTitle: {
    position: "absolute",
    bottom: 65,
    left: 20,
    color: COLORS.white,
    fontSize: 22,
  },

  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 200,
    width,
  },
});
