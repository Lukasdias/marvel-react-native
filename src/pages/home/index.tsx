import React, { useEffect } from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header/index";
import { Categories } from "../../components/Categories";
import { apiStore } from "../../api/api";
import { AxiosResponse } from "axios";

export function Home() {
  // const { GET, updateRoute } = apiStore();
  // const getData = async () => {
  //   const res = await GET();
  //   console.log(res);
  // };

  // useEffect(() => {
  //   updateRoute("characters");
  //   getData();
  // }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Categories />
    </View>
  );
}
