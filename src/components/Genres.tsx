import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { perfectHeight, perfectWidth } from '../helpers/commonFunctions'


interface Props {
    text: string
}

const Genres = ({ text }: Props) => {
    return (
        <OuterContainer>
            <Text>{text}</Text>
        </OuterContainer>
    )
}

export default Genres


const OuterContainer = styled.View`
  background-color: #d8d8d8;
  padding-horizontal: 10px;
  border-radius: 10px;
  margin-bottom: ${perfectHeight(5)}px;
  margin-right: ${perfectWidth(5)}px;
`