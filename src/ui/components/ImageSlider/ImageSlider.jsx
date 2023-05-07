import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ImageSlider.component.style";
import { COLORS, IMAGES } from "../../theme";
import { LinearGradient } from "expo-linear-gradient";

const ImageSlider = ({ chowData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const chowImages = chowData.images
    ? chowData.images
    : [IMAGES.defaultImg, IMAGES.defaultImg];

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        scrollEnabled={true}
        index={currentIndex}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {chowImages.map((image, index) => {
          console.log(image.url);
          return (
            <Image
              key={index + 1}
              source={{ uri: image.url }}
              style={styles.image}
            />
          );
        })}
      </Swiper>
      <Text style={styles.chowTitle}></Text>
      <View style={styles.bottomOverlay}>
        <LinearGradient
          colors={["#00000000", "#000"]}
          style={styles.bottomOverlay}
        />
      </View>

      <View style={styles.pagination}>
        {chowImages.map((_, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => setCurrentIndex(index)}
          >
            <View style={styles.dot}>
              {index === currentIndex && <View style={styles.activeDot} />}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
