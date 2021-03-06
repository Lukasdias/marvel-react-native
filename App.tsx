import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/pages/home/index";
import { Wiki } from "./src/pages/wiki/index";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Gilroy: require("./assets/fonts/gilroy-regular.ttf"),
    "Gilroy-Semi-Bold": require("./assets/fonts/gilroy-semibold.ttf"),
    "Gilroy-Bold": require("./assets/fonts/gilroy-bold.ttf"),
    "Gilroy-Heavy": require("./assets/fonts/gilroy-heavy.ttf"),
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
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Wiki"
            component={Wiki}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "scroll",
  },
});
