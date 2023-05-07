import { View, Text, Dimensions, Animated, Image } from "react-native";
import React, { useEffect } from "react";
import { useStateContext } from "../../../application/ContextProvider";
import styles from "./Explore.component.style";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { IMAGES, COLORS } from "../../theme";
import Button from "../../components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
// import { mockData } from "../../../services/mock";
import { getChowsAsync, processApiData } from "../../../services/api";
import { SimpleAnimation } from "react-native-simple-animations";

const Explore = () => {
  const { user } = useStateContext();
  const [chowData, setChowData] = React.useState([]);

  const flatlistRef = React.useRef(null);
  const handleScroll = ({ index }) => {
    flatlistRef.current.scrollToOffset({
      offset: index * width,
      animated: true,
    });
  };

  useEffect(() => {
    console.log("user", user);
    getChowsAsync({ token: user.token })
      .then((response) => {
        const chowData = processApiData(response);
        setChowData(chowData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!chowData) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={{ width, height }}>
      <Animated.FlatList
        data={chowData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled={false}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        ref={flatlistRef}
        renderItem={({ item, index }) => {
          return (
            <FlatlistPageComponent
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

const FlatlistPageComponent = ({ data, scroll }) => {
  const [activeTab, setActiveTab] = React.useState("description");
  const translateX = React.useRef(new Animated.Value(0)).current;
  const [favourited, setFavourited] = React.useState(false);

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
      <SimpleAnimation
        aim="in"
        animate={true}
        delay={1500}
        duration={1000}
        movementType="slide"
        direction="up"
        distance={700}
        style={styles.bottomNavContainer}
      >
        <Animated.View style={styles.bottomContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.title}</Text>
            <TouchableOpacity
              style={styles.favouriteIconContainer}
              onPress={() => setFavourited(!favourited)}
            >
              <Image
                source={favourited ? IMAGES.favourited : IMAGES.notFavourited}
                style={styles.favouriteIcon}
              />
            </TouchableOpacity>
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
      </SimpleAnimation>
    </View>
  );
};

export default Explore;
