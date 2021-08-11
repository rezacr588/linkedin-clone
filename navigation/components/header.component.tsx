import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileImage } from "../../components/ProfileImage.component";
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';

const Wrap = styled.View`
  padding: 5px 15px;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const Header = () => (
  <SafeAreaView>
    <Wrap>
      <ProfileImage
        source="https://media-exp1.licdn.com/dms/image/D4D35AQHo6gsZcOlkWQ/profile-framedphoto-shrink_100_100/0/1628274394712?e=1628758800&v=beta&t=2A0jIq6SucqHGQApbIdVDIGLJnZ47T4GqBgOYeuI7JI"
      />
      <Ionicons name="md-chatbox-ellipses" size={35} color="gray" />
    </Wrap>
  </SafeAreaView>
);

export default Header