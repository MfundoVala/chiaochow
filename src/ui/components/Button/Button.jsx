import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Button.component.styles";
import { COLORS, SHADOW } from "../../theme";

const Button = ({ color, text, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={color === "white" ? styles.whiteButton : styles.greenButton}
        onPress={onPress}
      >
        <Text
          style={
            color === "white"
              ? { ...styles.buttonText, color: COLORS.secondary }
              : styles.buttonText
          }
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
