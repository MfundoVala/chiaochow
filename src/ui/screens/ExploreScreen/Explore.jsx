import { View, Text, Dimensions, Animated } from "react-native";
import React from "react";
import { useStateContext } from "../../../application/ContextProvider";
import styles from "./Explore.component.style";
import { mockData } from "../../../services/mock";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Button from "../../components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const DetailsComponent = ({ data, index, scroll }) => {
  const [activeTab, setActiveTab] = React.useState("description");
  const translateX = React.useRef(new Animated.Value(0)).current;
  const handleTabChange = (value) => {
    Animated.timing(translateX, {
      toValue: value,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ImageSlider chowData={data} />
      <Animated.View style={styles.bottomContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity
            onPress={() => {
              setActiveTab("description");
              handleTabChange(0);
            }}
          >
            <Text
              style={
                activeTab === "description"
                  ? styles.tabTextActive
                  : styles.tabText
              }
            >
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab("nutrition");
              handleTabChange(170);
            }}
          >
            <Text
              style={
                activeTab === "nutrition"
                  ? styles.tabTextActive
                  : styles.tabText
              }
            >
              Nutrition Facts
            </Text>
          </TouchableOpacity>

          <Animated.View
            style={{
              ...styles.tabIndicator,
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
            ref={translateX}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            {activeTab == "description" ? data.description : "LOREM IPSUM"}
          </Text>
        </View>
        <View style={styles.bottomNavContainer}>
          <Button
            text="Nah! Find something else."
            onPress={() => {
              if (data.id == 1) {
                scroll({ index: 1 });
              } else {
                scroll({ index: -1 });
              }
            }}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const Explore = () => {
  const { setLoggedIn } = useStateContext();
  const flatlistRef = React.useRef(null);
  const handleScroll = ({ index }) => {
    flatlistRef.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });
  };

  return (
    <View style={{ width, height }}>
      <Animated.FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled={false}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        ref={flatlistRef}
        renderItem={({ item, index }) => {
          return (
            <DetailsComponent
              data={item}
              key={item.id}
              index={1}
              scroll={handleScroll}
            />
          );
        }}
      />
    </View>
  );
};

export default Explore;
