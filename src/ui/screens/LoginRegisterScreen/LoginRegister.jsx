import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "../../components/Button/Button";
import React, { useState } from "react";
import { useStateContext } from "../../../application/ContextProvider";
import { IMAGES, COLORS } from "../../theme";
import styles from "./LoginRegister.component.style";
import { loginAsync } from "../../../services/api";

const Login = ({ registerPage = false }) => {
  const { setLoggedIn, user, setUser, registering, setRegistering, onboarded } =
    useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (email, password) => {
    loginAsync(email, password)
      .then((response) => {
        const { user } = response;
        const token = response.jwt;
        console.log("response", response);
        console.log("token", token);
        setUser({ ...user, token });
        setLoggedIn(true);
      })
      .catch((error) => {
        alert("Error logging in: Invalid credentials");
        console.log("error", error);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={IMAGES.blob} style={styles.blob} />
      <Image
        source={registerPage ? IMAGES.girl : IMAGES.boy}
        style={styles.icon}
      />
      <Text style={styles.heading}>{registerPage ? "Register" : "Login"}</Text>
      <View style={styles.form}>
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.input}
          placeholder="yourmail@mail.com"
          placeholderTextColor={COLORS.grayLight}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        {registerPage && (
          <>
            <Text style={styles.label}>username</Text>
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
        <TextInput
          style={styles.input}
          placeholder="your password"
          placeholderTextColor={COLORS.grayLight}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginTop: -5,
            marginRight: 5,
            marginBottom: 25,
          }}
          onPress={() => {
            alert("Forgot password");
          }}
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <Button
          text="Login"
          onPress={() => {
            handleLogin(email, password);
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
    </View>
  );
};

export default Login;
