import React, { memo, useEffect, useMemo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { CharacterProps } from "../../utils/character";
import { ComicsProps } from "../../utils/comics";
import { CreatorProps } from "../../utils/creator";

import { styles } from "./styles";
import { Skeleton } from "moti/skeleton";
import { dataStore } from "../../stores/dataStore";

interface CardProps {
  type: "characters" | "creators" | "comics";
  element: CharacterProps | ComicsProps | CreatorProps;
}

function Card({ ...props }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Skeleton show={isLoading} colorMode="light" radius={30}>
          <>
            <Image
              source={{
                uri: `${props.element.thumbnail.path}.${props.element.thumbnail.extension}`,
              }}
              style={styles.image}
            />
            <Text numberOfLines={1} style={styles.name}>
              {props.element.name}
            </Text>
          </>
        </Skeleton>
      </TouchableOpacity>
    </>
  );
}

export default memo(Card);
