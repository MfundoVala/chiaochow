import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import {
  ContextProvider,
  useStateContext,
} from "./src/application/ContextProvider";
import OnboardingScreen from "./src/ui/screens/OnboardingScreen/Onboarding";
import LoginRegisterScreen from "./src/ui/screens/LoginRegisterScreen/LoginRegister";
import ExploreScreen from "./src/ui/screens/ExploreScreen/Explore";

// const Stack = createNativeStackNavigator();

function App() {
  const { onboarded, loggedIn, registering } = useStateContext();
  return (
    <>
      <StatusBar style="auto" />
      {!onboarded && <OnboardingScreen />}
      {onboarded && !loggedIn && !registering && <LoginRegisterScreen />}
      {onboarded && !loggedIn && registering && (
        <LoginRegisterScreen registerPage={true} />
      )}
      {loggedIn && <ExploreScreen />}
    </>
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

const styles = StyleSheet.create({
  container: {},
});
