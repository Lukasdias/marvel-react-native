import React, { useEffect, useReducer } from "react";
import { SafeAreaView, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header/index";
import { Categories } from "../../components/Categories";
import { dataStore } from "../../stores/dataStore";
import Cards from "../../components/Cards/index";
import { ScrollView } from "react-native-gesture-handler";
import { Skeleton } from "moti/skeleton";
import { StyleSheet, Pressable } from "react-native";
import { MotiView } from "moti";
export function Home() {
  const {
    fetchCharacters,
    fetchComics,
    fetchCreators,
    characters,
    comics,
    creators,
  } = dataStore();

  useEffect(() => {
    fetchCharacters();
    fetchComics();
    fetchCreators();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginVertical: 8 }}>
        <Header />
        <Categories />
        <MotiView
          from={{
            left: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            left: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "timing",
            duration: 1,
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Cards type="characters" element={characters} />
            <Cards type="comics" element={comics} />
            <Cards type="creators" element={creators} />
          </SafeAreaView>
        </MotiView>
      </ScrollView>
    </View>
  );
}
