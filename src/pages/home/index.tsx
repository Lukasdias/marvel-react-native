import React, { useEffect } from "react";
import { SafeAreaView, SectionList, View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header/index";
import { Categories } from "../../components/Categories";
import { AxiosResponse } from "axios";
import { dataStore } from "../../stores/dataStore";
import { Cards } from "../../components/Cards/index";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export function Home() {
  const { fetchCharacters, fetchComics, fetchCreators } = dataStore();
  useEffect(() => {
    fetchCharacters();
    fetchComics();
    fetchCreators();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Categories />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ marginVertical: 8 }}>
          <Cards />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
