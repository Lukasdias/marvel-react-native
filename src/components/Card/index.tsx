import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { CharacterProps } from "../../utils/character";
import { ComicsProps } from "../../utils/comics";
import { CreatorProps } from "../../utils/creator";

import { styles } from "./styles";

interface CardProps {
  character?: CharacterProps;
  comics?: ComicsProps;
  creators?: CreatorProps;
}

export function Card({ ...props }: CardProps) {
  return (
    <>
      {props.character && (
        <TouchableOpacity style={styles.container}>
          <Image
            source={{
              uri: `${props.character.thumbnail.path}.${props.character.thumbnail.extension}`,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{props.character.name}</Text>
        </TouchableOpacity>
      )}
      {props.comics && (
        <TouchableOpacity style={styles.container}>
          <Image
            source={{
              uri: `${props.comics.thumbnail.path}.${props.comics.thumbnail.extension}`,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{props.comics.title}</Text>
        </TouchableOpacity>
      )}
      {props.creators && (
        <TouchableOpacity style={styles.container}>
          <Image
            source={{
              uri: `${props.creators.thumbnail.path}.${props.creators.thumbnail.extension}`,
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{props.creators.fullName}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
