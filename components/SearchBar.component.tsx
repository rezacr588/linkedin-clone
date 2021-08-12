import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SearchInput = styled.View`
  flex: 1;
  padding: 10px;
  background: #eef3f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`
const Space = styled.View`
  width: 10px;
  height: 10px;
`

const Text = styled.Text`
  color: rgba(0,0,0,0.6);
  font-weight: 500;
  font-size: 14px;
`

const LongSpace = styled.View`
  flex: 1
`

export const SearchBar = () => {
  return (
    <SearchInput>
      <FontAwesome
        name="search"
        size={15}
        color="black"
      />
      <Space />
      <Text>
        Search
      </Text>
      <LongSpace />
      <MaterialCommunityIcons
        name="qrcode-scan"
        size={20}
        color="rgba(0,0,0,0.6)"
      />
    </SearchInput>
  )
}