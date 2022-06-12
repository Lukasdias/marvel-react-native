import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
} from "react-native";
import { dataStore } from "../../stores/dataStore";
import { Card } from "../Card";

import { styles } from "./styles";

export function Cards() {
  const {
    characters,
    creators,
    comics,
    increaseOffset,
    fetchComics,
    fetchCharacters,
    fetchCreators,
  } = dataStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Characters</Text>
        <Text style={styles.seeMore} onPress={() => console.log("See more")}>
          See more...
        </Text>
      </View>
      <SafeAreaView style={styles.cards}>
        <SectionList
          horizontal
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={characters.map((elem) => ({
            title: elem.name,
            data: [elem],
          }))}
          onEndReached={() => {
            increaseOffset();
            fetchCharacters();
          }}
          renderItem={({ item }) => {
            return <Card character={item} key={item.id} />;
          }}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <View style={styles.header}>
        <Text style={styles.headerText}>Comics</Text>
        <Text style={styles.seeMore} onPress={() => console.log("See more")}>
          See more...
        </Text>
      </View>

      <SafeAreaView style={styles.cards}>
        <SectionList
          horizontal
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={comics.map((elem) => ({
            title: elem.title,
            data: [elem],
          }))}
          onEndReached={() => {
            increaseOffset();
            fetchComics();
          }}
          renderItem={({ item }) => {
            return <Card comics={item} key={item.id} />;
          }}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>

      <View style={styles.header}>
        <Text style={styles.headerText}>Creators</Text>
        <Text style={styles.seeMore} onPress={() => console.log("See more")}>
          See more...
        </Text>
      </View>

      <SafeAreaView style={styles.cards}>
        <SectionList
          horizontal
          stickySectionHeadersEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          sections={creators.map((elem) => ({
            title: elem.fullName,
            data: [elem],
          }))}
          onEndReached={() => {
            increaseOffset();
            fetchCreators();
          }}
          renderItem={({ item }) => {
            return <Card creators={item} key={item.id} />;
          }}
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
}
