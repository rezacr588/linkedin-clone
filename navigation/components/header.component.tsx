import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileImage } from "../../components/ProfileImage.component";
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from "../../components/SearchBar.component";
import { TouchableOpacity } from "react-native";
import { FC } from "react";
import { StackHeaderProps } from "@react-navigation/stack";

const Wrap = styled.View`
  padding: 5px 15px;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`
const SearchWrapper = styled(TouchableOpacity)`
  margin-left: 15px;
  margin-right: 15px;
  flex: 1;
  height: 30px;
`

const Header: FC<StackHeaderProps> = ({ navigation }) => {
  return (
  <SafeAreaView>
    <Wrap>
      <ProfileImage
        source="https://media-exp1.licdn.com/dms/image/D4D35AQHo6gsZcOlkWQ/profile-framedphoto-shrink_100_100/0/1628274394712?e=1628758800&v=beta&t=2A0jIq6SucqHGQApbIdVDIGLJnZ47T4GqBgOYeuI7JI"
        />
        <SearchWrapper
          onPress={() => navigation.navigate("NormalSearch")}
        >
          <SearchBar />
        </SearchWrapper>
      <Ionicons name="md-chatbox-ellipses" size={25} color="rgba(0,0,0,0.6)" />
    </Wrap>
  </SafeAreaView>
)};

export default Header