import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.bottom}>
      <Text style={{ fontSize: 12 }} numberOfLines={1}>
        Do what you can, with what you have, where you are.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#eee",
    borderTopWidth: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
});
