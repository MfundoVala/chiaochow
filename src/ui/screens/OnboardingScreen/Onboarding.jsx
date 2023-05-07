import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { useStateContext } from "../../../application/ContextProvider";
import Onboarding from "react-native-onboarding-swiper";
import { IMAGES, COLORS } from "../../theme";
import styles from "./Onboarding.component.style";
import Button from "../../components/Button/Button";

const OnboardingScreen = () => {
  const { width, height } = Dimensions.get("window");
  const { setOnboarded } = useStateContext();
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
      }}
    >
      <Image source={IMAGES.blob} style={styles.blob} />
      <View
        style={{
          width,
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <Image source={IMAGES.logo} style={styles.logo} />
      </View>
      <Onboarding
        onDone={() => {
          setOnboarded(true);
        }}
        onSkip={() => {
          setOnboarded(true);
        }}
        flatlistProps={{
          showsHorizontalScrollIndicator: false,
          bounces: false,
        }}
        transitionAnimationDuration={500}
        containerStyles={{
          flex: 1,
          width,
          height,
        }}
        pages={[
          {
            backgroundColor: "transparent",
            image: <Image source={IMAGES.onboarding1} style={styles.icon} />,
            title: "",
            subtitle: (
              <View style={styles.titleContainer}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>
                    Hungry? <Text style={styles.titleBold}>CiaChow</Text> helps
                    you find something to eat.
                  </Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button
                    color="white"
                    text="Get Started"
                    onPress={() => setOnboarded(true)}
                  />
                </View>
              </View>
            ),
          },
          {
            backgroundColor: COLORS.secondary,
            image: <Image source={IMAGES.girl} style={styles.iconSingle} />,
            title: "",
            subtitle: (
              <View style={styles.titleContainer}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>
                    Not sure what to eat? We've done the hard picking for you.
                  </Text>
                </View>
                <View style={styles.buttonBox}>
                  <Button
                    color="white"
                    text="Get Started"
                    onPress={() => setOnboarded(true)}
                  />
                </View>
              </View>
            ),
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
