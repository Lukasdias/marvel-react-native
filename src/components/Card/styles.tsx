import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
  },
  image: {
    width: 140,
    height: 230,
    borderRadius: 30,
  },
  name: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    color: theme.colors.primary.red,
    maxWidth: 200,
    fontSize: 20,
    fontFamily: "Gilroy-Heavy",
    padding: 8,
  },
});
