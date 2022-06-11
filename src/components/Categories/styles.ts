import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  welcome: {
    color: theme.colors.primary.grey,
    ...theme.typography.homeSubtitle,
  },
  title: {
    color: theme.colors.primary.dark,
    marginBottom: 24,
    ...theme.typography.homeTitle,
  },
  categoriesWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoriesButton: {
    width: 56,
    height: 56,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoriesButtonGradient: {
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
