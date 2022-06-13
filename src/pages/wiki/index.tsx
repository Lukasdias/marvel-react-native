import React from "react";
import { View, ImageBackground } from "react-native";

import { CharacterProps } from "../../utils/character";
import { ComicsProps } from "../../utils/comics";
import { CreatorProps } from "../../utils/creator";

import { styles } from "./styles";

type WikiProps = {
  element: ElementProps;
};

export function Wiki({ ...props }: ElementProps) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image} /> */}
    </View>
  );
}
