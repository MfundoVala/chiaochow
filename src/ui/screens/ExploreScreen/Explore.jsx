import { View, Text, Button } from "react-native";
import React from "react";
import { useStateContext } from "../../../application/ContextProvider";

const Explore = () => {
  const { setLoggedIn } = useStateContext();
  return (
    <View>
      <Text>Explore screen</Text>
      <Button
        title="Next Item"
        onPress={() => {
          alert("Next Item");
        }}
      />
      <Button
        title="Logout"
        onPress={() => {
          alert("Next Item");
          setLoggedIn(false);
        }}
      />
    </View>
  );
};

export default Explore;
