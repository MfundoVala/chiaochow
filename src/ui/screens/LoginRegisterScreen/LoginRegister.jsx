import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import { useStateContext } from "../../../application/ContextProvider";
import { IMAGES, COLORS } from "../../theme";
import styles from "./LoginRegister.component.style";
import { loginAsync, registerAsync } from "../../../services/api";
import { SimpleAnimation } from "react-native-simple-animations";

const Login = ({ registerPage = false }) => {
  const { setLoggedIn, user, setUser, registering, setRegistering, onboarded } =
    useStateContext();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { width, height } = Dimensions.get("window");

  const handleLogin = (email, password) => {
    loginAsync(email, password)
      .then((response) => {
        const { user } = response;
        const token = response.jwt;
        setUser({ ...user, token });

        setLoggedIn(true);
      })
      .catch((error) => {
        alert("Error logging in: Invalid credentials");
      });
  };

  const handleRegister = (username, email, password) => {
    registerAsync(username, email, password)
      .then((response) => {
        const { user } = response;
        const token = response.jwt;
        setUser({ ...user, token });
        setRegistering(false);
      })
      .catch((error) => {
        alert("Error registering: Invalid credentials");
      });
  };

  return (
    <SimpleAnimation
      aim="in"
      animate={true}
      duration={700}
      movementType="slide"
      direction="left"
      distance={700}
    >
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground source={IMAGES.blob} style={styles.blob} />
        <SimpleAnimation
          delay={600}
          duration={1000}
          fade
          staticType="zoom"
          direction="up"
          style={styles.iconContainer}
        >
          <Image
            source={registerPage ? IMAGES.girl : IMAGES.boy}
            style={styles.icon}
          />
        </SimpleAnimation>

        <Text style={styles.heading}>
          {registerPage ? "Register" : "Login"}
        </Text>
        <View style={styles.form}>
          <Text style={styles.label}>username</Text>
          <TextInput
            style={styles.input}
            placeholder="yourmail@mail.com"
            placeholderTextColor={COLORS.grayLight}
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(text) => setUsername(text)}
          />
          {registerPage && (
            <>
              <Text style={styles.label}>email</Text>
              <TextInput
                style={styles.input}
                placeholder="yourmail@mail.com"
                placeholderTextColor={COLORS.grayLight}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </>
          )}
          <Text style={styles.label}>password</Text>
          <View style={{ width: 335, alignSelf: "center" }}>
            <TextInput
              style={styles.input}
              placeholder="your password"
              placeholderTextColor={COLORS.grayLight}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                position: "absolute",
              }}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Image
                source={
                  !showPassword ? IMAGES.showPassword : IMAGES.hidePassword
                }
                style={styles.showPasswordIcon}
              />
            </TouchableOpacity>
          </View>
          {!registerPage && (
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
                marginTop: -5,
                marginRight: width / 25,
              }}
              onPress={() => {
                alert("Forgot password");
              }}
            >
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          )}

          <View style={{ marginBottom: 15 }} />

          <Button
            text={registerPage ? "Register" : "Login"}
            onPress={() => {
              setShowPassword(false);
              registerPage
                ? handleRegister(username, email, password)
                : handleLogin(username, password);
            }}
          />
          <TouchableOpacity
            style={{
              alignSelf: "center",
              marginTop: 35,
            }}
            onPress={() => {
              setRegistering(!registering);
            }}
          >
            <Text style={styles.registerText}>
              {registerPage ? "Already" : "Don’t"} have an account?{" "}
              <Text style={{ fontWeight: 700 }}>
                {registerPage ? "Login" : "Register"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SimpleAnimation>
  );
};

export default Login;
