import React from "react"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileImage } from "../../components/ProfileImage.component";
import styled from 'styled-components/native'

const View = styled.View`
  padding: 5px 15px;
  background: white;
`

const Header = () => (
  <SafeAreaView>
    <View>
      <ProfileImage
        source="https://media-exp1.licdn.com/dms/image/D4D35AQHo6gsZcOlkWQ/profile-framedphoto-shrink_100_100/0/1628274394712?e=1628758800&v=beta&t=2A0jIq6SucqHGQApbIdVDIGLJnZ47T4GqBgOYeuI7JI"
      />
    </View>
  </SafeAreaView>
);

export default Header