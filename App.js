import { StatusBar } from "expo-status-bar";
import { Text, View, Dimensions } from "react-native";
import {
  ContextProvider,
  useStateContext,
} from "./src/application/ContextProvider";
import OnboardingScreen from "./src/ui/screens/OnboardingScreen/Onboarding";
import LoginRegisterScreen from "./src/ui/screens/LoginRegisterScreen/LoginRegister";
import ExploreScreen from "./src/ui/screens/ExploreScreen/Explore";
import * as Font from "expo-font";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { COLORS } from "./src/ui/theme";

function App() {
  const { onboarded, loggedIn, registering } = useStateContext();
  const { width, height } = Dimensions.get("window");
  const [loaded] = useFonts({
    Inter: require("./src/assets/fonts/Inter-Regular.otf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.otf"),
    InterBold: require("./src/assets/fonts/Inter-Bold.otf"),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ width, height, backgroundColor: COLORS.primary }}>
      <StatusBar style="auto" />
      {!onboarded && <OnboardingScreen />}
      {onboarded && !loggedIn && !registering && <LoginRegisterScreen />}
      {onboarded && !loggedIn && registering && (
        <LoginRegisterScreen registerPage={true} />
      )}
      {loggedIn && <ExploreScreen />}
    </View>
  );
}

function AppWrapper() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default AppWrapper;
