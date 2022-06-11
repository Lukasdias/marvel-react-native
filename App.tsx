import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./src/pages/home/index";
import { Other } from "./src/pages/other/index";

import { theme } from "./src/theme/theme";

import { useFonts } from "expo-font";
import { Header } from "./src/components/Header/index";

export default function App() {
  const [loaded] = useFonts({
    Gilroy: require("./assets/fonts/gilroy-regular.ttf"),
    GilroySemiBold: require("./assets/fonts/gilroy-semibold.ttf"),
    GilroyBold: require("./assets/fonts/gilroy-bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Other" component={Other} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
