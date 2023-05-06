import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { useStateContext } from "../../../application/ContextProvider";
import Onboarding from "react-native-onboarding-swiper";
import { IMAGES, COLORS } from "../../theme";
import styles from "./Onboarding.component.style";
import Button from "../../components/Button/Button";

const OnboardingScreen = () => {
  const { setOnboarded } = useStateContext();
  return (
    <View style={styles.container}>
      <Image source={IMAGES.blob} style={styles.blob} />
      <Image source={IMAGES.logo} style={styles.logo} />
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
        showDone={false}
        containerStyles={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
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
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
