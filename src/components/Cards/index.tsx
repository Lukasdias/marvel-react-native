import React, { useEffect, memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
} from "react-native";
import { dataStore } from "../../stores/dataStore";
import Card from "../Card";

import { styles } from "./styles";

import { CharacterProps } from "../../utils/character";
import { CreatorProps } from "../../utils/creator";
import { ComicsProps } from "../../utils/comics";

interface CardProps {
  element: CharacterProps[] | CreatorProps[] | ComicsProps[];
  type: "characters" | "creators" | "comics";
}

function Cards({ ...props }: CardProps) {
  const { increaseOffset, fetchComics, fetchCharacters, fetchCreators } =
    dataStore();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Characters</Text>
        <Text style={styles.seeMore} onPress={() => console.log("See more")}>
          See more...
        </Text>
      </View>
      <SectionList
        horizontal
        initialNumToRender={33}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        sections={props.element?.map((elem) => ({
          title: elem.name,
          data: [elem],
        }))}
        onEndReached={() => {
          increaseOffset();
          if (props.type === "characters") fetchCharacters();
          if (props.type === "creators") fetchCreators();
          if (props.type === "comics") fetchComics();
        }}
        renderItem={({ item }) => {
          return <Card type={props.type} element={item} key={item.id} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default memo(Cards);
