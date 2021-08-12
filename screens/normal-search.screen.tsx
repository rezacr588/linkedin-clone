import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import styled from "styled-components/native"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';
import { FC } from "react";
import { ScreenStackProps } from "react-native-screens";
import { useNavigation } from "@react-navigation/native";

const Container = styled(SafeAreaView)`
  flex: 1;
`

const SearchSection = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SearchInput = styled.TextInput`
  flex: 1;
`

const QRbutton = styled(MaterialCommunityIcons)`
  padding: 10px;
`

const BackButtonWrapper = styled.View`
  padding: 10px;
`

export const NormalSearchScreen: FC<ScreenStackProps> = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <SearchSection>
        <BackButtonWrapper>
          <TouchableRipple
            onPress={() => navigation.goBack()}
            rippleColor="rgba(0, 0, 0, .32)"
          >
            <Ionicons name="arrow-back" size={30} color="rgba(0,0,0,0.6)" />
          </TouchableRipple>
        </BackButtonWrapper>
        <SearchInput placeholder="Search" />
        <QRbutton
          name="qrcode-scan"
          size={20}
          color="#2f95dc"
        />
      </SearchSection>
    </Container>
  )
}
