import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerText: {
    color: theme.colors.primary.red,
    fontFamily: "Gilroy-Heavy",
    fontSize: 18,
  },
  seeMore: {
    color: theme.colors.primary.grey,
    ...theme.typography.homeSubtitle,
  },
  cards: {
    // flexDirection: "row",
    // paddingHorizontal: 20,
  },
});
