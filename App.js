import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/Store";
import Navigation from "./src/Navigation/index";
import NavigationService from "./src/Service/navigationService";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Navigation
          ref={(navigatorRef) =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
