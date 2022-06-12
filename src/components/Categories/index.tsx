import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Hero from "./../../../assets/icons/hero.svg";
import Villain from "./../../../assets/icons/villain.svg";
import AntiHero from "./../../../assets/icons/antihero.svg";
import Alien from "./../../../assets/icons/alien.svg";
import Human from "./../../../assets/icons/human.svg";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { theme } from "../../theme/theme";
import { SvgProps } from "react-native-svg";

type IconTypes = "hero" | "villain" | "antihero" | "alien" | "human";

interface CategoriesNodesProps {
  gradient: { from: string; to: string };
  icon: IconTypes;
  action: () => void;
}

const nodes: CategoriesNodesProps[] = [
  {
    gradient: theme.colors.gradient.blue,
    icon: "hero",
    action: () => console.log("hero"),
  },
  {
    gradient: theme.colors.gradient.red,
    icon: "villain",
    action: () => console.log("Villain"),
  },
  {
    gradient: theme.colors.gradient.purple,
    icon: "antihero",
    action: () => console.log("AntiHero"),
  },
  {
    gradient: theme.colors.gradient.green,
    icon: "alien",
    action: () => console.log("Alien"),
  },
  {
    gradient: theme.colors.gradient.pink,
    icon: "human",
    action: () => console.log("Human"),
  },
];

const Icons = (props: any) => {
  switch (props.icon) {
    case "hero":
      return (
        <>
          <Hero width={26} height={26} fill={"#fff"} />
        </>
      );
    case "villain":
      return (
        <>
          <Villain width={26} height={26} fill={"#fff"} />
        </>
      );
    case "antihero":
      return (
        <>
          <AntiHero width={26} height={26} fill={"#fff"} />
        </>
      );
    case "alien":
      return (
        <>
          <Alien width={26} height={26} fill={"#fff"} />
        </>
      );
    case "human":
      return (
        <>
          <Human width={26} height={26} fill={"#fff"} />
        </>
      );
    default:
      return <></>;
  }
};

export function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Marvel Native</Text>
      <View style={styles.categoriesWrapper}>
        {nodes.map((E: CategoriesNodesProps, idx: number) => {
          return (
            <View key={idx} style={styles.categoriesButton}>
              <LinearGradient
                colors={[E.gradient.from, E.gradient.to]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.categoriesButtonGradient}
              >
                <Icons icon={E.icon} />
              </LinearGradient>
            </View>
          );
        })}
      </View>
    </View>
  );
}
