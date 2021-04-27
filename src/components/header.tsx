import React from "react";
import { Appbar } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

export default function Header() {
  const open = async (url: string) => {
    let result = await WebBrowser.openBrowserAsync(url);
    console.log(result);
  };

  return (
    <Appbar.Header
      style={{
        backgroundColor: "#fff",
        elevation: 0,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
      }}
      dark={false}
      statusBarHeight={30}
    >
      <Appbar.Content title="Decide" />
      <Appbar.Action
        icon="instagram"
        size={30}
        onPress={() => open("https://instagram.com/devyuji")}
        accessibilityLabel="instagram/devyuji"
      />
      <Appbar.Action
        icon="github"
        size={30}
        onPress={() => open("https://github.com/devyuji/decide")}
        accessibilityLabel="github/devyuji"
      />
    </Appbar.Header>
  );
}
