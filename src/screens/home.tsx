import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

interface choiceInterface {
  title: string;
  image_name: string;
}

const { height } = Dimensions.get("screen");

const randomNumber = (): number => {
  return Math.floor(Math.random() * 2);
};

function Home() {
  const [choice, setChoice] = useState<choiceInterface>({
    title: "what to do?",
    image_name: "confuse",
  });
  const [resetBtn, setReset] = useState<boolean>(false);
  const animation = useRef<Animated.Value>(new Animated.Value(0)).current;

  const decide = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 2,
        duration: 100,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();

    if (randomNumber()) {
      setChoice({
        title: "go for it!",
        image_name: "do",
      });
    } else {
      setChoice({
        title: "Don't",
        image_name: "girl",
      });
    }
    setReset(true);
  };

  const reset = () => {
    setChoice({
      title: "what to do?",
      image_name: "confuse",
    });

    setReset(false);
  };

  const bounce: Animated.AnimatedInterpolation = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, -(height / 7), 0],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0, 1],
  });

  return (
    <>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY: bounce }],
            opacity,
          },
        ]}
      >
        <Text
          style={{
            marginVertical: 20,
            textAlign: "center",
            fontSize: 22,
            fontWeight: "700",
            textTransform: "capitalize",
          }}
        >
          {choice.title}
        </Text>
        <View style={styles.image_container}>
          <Image
            source={
              choice.image_name === "confuse"
                ? require("../../assets/images/confuse.png")
                : choice.image_name === "do"
                ? require("../../assets/images/do.png")
                : require("../../assets/images/dont.png")
            }
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </Animated.View>
      <Button
        mode="contained"
        color="#42214F"
        style={{ marginTop: 30, width: "80%", borderRadius: 12, elevation: 0 }}
        dark={true}
        disabled={resetBtn}
        onPress={decide}
      >
        {resetBtn ? "decession is made" : "Let's decide"}
      </Button>
      {resetBtn && (
        <IconButton
          icon="autorenew"
          color="#42214F"
          size={30}
          animated={true}
          accessibilityLabel="reset decession"
          onPress={reset}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "relative",
    width: "80%",
    height: 250,
    backgroundColor: "#F2E9F6",
    borderRadius: 16,
    overflow: "hidden",
  },
  image_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

export default Home;
