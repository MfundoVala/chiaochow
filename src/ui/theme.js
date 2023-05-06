import logo from "../assets/logo.png";
import favicon from "../assets/favicon.png";
import onboarding1 from "../assets/onboarding1.png";
import blob from "../assets/blob.png";
import girl from "../assets/girl.png";
import boy from "../assets/boy.png";

const COLORS = {
  primary: "#4CAD73",
  secondary: "#0EB177",
  white: "#FFF",
  black: "#333333",
  gray: "#828282",
  grayVariant: "#F2F2F2",
  grayLight: "#BDBDBD",
};

const FONTS = {
  title: { fontSize: 34, fontWeight: 700, lineHeight: 41, letterSpacing: 0.37 },
  btn: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 16.94,
    letterSpacing: 0.37,
  },
  h1: { fontSize: 24, fontWeight: 400, lineHeight: 18 },
  h2: { fontSize: 14, fontWeight: 400, lineHeight: 24 },
  h3: { fontSize: 12, fontWeight: 400, lineHeight: 13 },
  h4: { fontSize: 10, fontWeight: 400, lineHeight: 18 },
};

const SHADOW = {
  shadowColor: COLORS.greyVariant,
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 4,

  elevation: 25,
};

const SHADOW_SMALL = {
  shadowColor: COLORS.shadow,
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 1,
  elevation: 1,
};

const IMAGES = {
  logo,
  favicon,
  onboarding1,
  blob,
  girl,
  boy,
};

export { COLORS, FONTS, IMAGES, SHADOW, SHADOW_SMALL };
