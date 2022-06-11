import { StyleSheet } from "react-native";

export const theme = {
  typography: StyleSheet.create({
    profileTitle: {
      fontSize: 42,
      fontWeight: "900",
      fontFamily: "Gilroy",
    },
    homeTitle: {
      fontSize: 32,
      fontWeight: "900",
      fontFamily: "Gilroy",
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: "900",
      fontFamily: "Gilroy",
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      fontFamily: "Gilroy",
    },
    profileSubtitle: {
      fontSize: 16,
      fontWeight: "600",
      fontFamily: "Gilroy",
    },
    homeSubtitle: {
      fontSize: 14,
      fontWeight: "700",
      fontFamily: "Gilroy",
    },
    description: {
      fontSize: 14,
      fontFamily: "Gilroy",
    },
    Characteristic: {
      fontSize: 12,
      fontFamily: "Gilroy",
    },
    Ability: {
      fontSize: 12,
      fontFamily: "Gilroy",
    },
    cardSubtitle: {
      fontSize: 10,
      fontFamily: "Gilroy",
    },
  }),
  colors: {
    primary: {
      red: "#F2264B",
      black: "#000",
      dark: "#313140",
      grey: "#B7B7C8",
      silver: "#f8f8f8",
      white: "#fff",
    },
    gradient: {
      blue: {
        from: "rgba(0,91,234,1)",
        to: "rgba(0,198,251,1)",
      },
      red: {
        from: "rgba(237,29,36,1)",
        to: "rgba(237,31,105,1)",
      },
      purple: {
        from: "rgba(178,36,239,1)",
        to: "rgba(117,121,255,1)",
      },
      green: {
        from: "rgba(11,163,96,1)",
        to: "rgba(60,186,146,1)",
      },
      pink: {
        from: "rgba(255,126,179,1)",
        to: "rgba(255,117,140,1)",
      },
    },
  },
};
