import logo from "../assets/logo.png";
import favicon from "../assets/favicon.png";
import onboarding1 from "../assets/onboarding1.png";
import blob from "../assets/blob.png";
import girl from "../assets/girl.png";
import boy from "../assets/boy.png";
import defaultImg from "../assets/defaultImg.png";
import showPassword from "../assets/showpassword.png";
import hidePassword from "../assets/hidepassword.png";
import favourited from "../assets/favourited.png";
import notFavourited from "../assets/notfavourited.png";

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
  title: {
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 41,
    letterSpacing: 0.37,
    fontFamily: "InterBold",
  },
  btn: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 16.94,
    letterSpacing: 0.37,
    fontFamily: "InterMedium",
  },
  h1: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 41,
    fontFamily: "InterBold",
  },
  h2: { fontSize: 14, fontWeight: 400, lineHeight: 24, fontFamily: "Inter" },
  h3: { fontSize: 13, fontWeight: 400, lineHeight: 13, fontFamily: "Inter" },
  h4: { fontSize: 10, fontWeight: 400, lineHeight: 18, fontFamily: "Inter" },
};

const SHADOW = {
  shadowColor: COLORS.black,
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 2,

  elevation: 5,
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
  defaultImg,
  showPassword,
  hidePassword,
  favourited,
  notFavourited,
};

export { COLORS, FONTS, IMAGES, SHADOW, SHADOW_SMALL };
