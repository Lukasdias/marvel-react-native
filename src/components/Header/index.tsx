import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { theme } from "../../theme/theme";

import Menu from "./../../../assets/icons/menu.svg";
import Marvel from "./../../../assets/icons/marvel.svg";
import Search from "./../../../assets/icons/search.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Menu width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Marvel fill={theme.colors.primary.red} width={71} height={26} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Search width={24} height={24} fill={"#000"} />
      </TouchableOpacity>
    </View>
  );
}
