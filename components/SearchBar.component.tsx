import React from "react"
import { TextInput } from "react-native";

export const SearchBar = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  return <TextInput
    onChangeText={onChangeText}
    value={text}
  />
}