import React, { FC } from "react";
import styled from 'styled-components/native'

interface Props {
  source: string
}

const Avatar = styled.Image`
  border-radius: ${35 / 2}px;
  height: 35px;
  width: 35px;
  background: white;
`

export const ProfileImage: FC<Props> = ({ source }) => {
  return (
    <Avatar source={{uri: source}}/>
  )
}