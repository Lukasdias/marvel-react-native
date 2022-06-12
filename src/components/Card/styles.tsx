import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginRight: 25,
  },
  image: {
    width: 140,
    height: 230,
    borderRadius: 30,
  },
  name: {
    position: "absolute",
    bottom: 0,
    backgroundColor: theme.colors.primary.dark,
    color: theme.colors.primary.red,
    ...theme.typography.profileSubtitle,
    width: "100%",
    padding: 8,
  },
});
