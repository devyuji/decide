import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Footer from "./src/components/footer";
import Header from "./src/components/header";
import Home from "./src/screens/home";

export default function App() {
  return (
    <PaperProvider>
      <Header />
      <View style={styles.container}>
        <Home />
      </View>
      <Footer />
      <StatusBar style="dark" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "25%",
  },
});
