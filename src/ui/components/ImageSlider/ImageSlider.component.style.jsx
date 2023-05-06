import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "45%",
    position: "absolute",
    top: 0,
  },

  swiper: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    height: 180,
    width: "100%",
  },
});
