import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { colors } from '../constants'
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
  background-color: ${colors.grey};
  padding-horizontal: 10px;
  border-radius: 10px;
  margin-bottom: ${perfectHeight(5)}px;
  margin-right: ${perfectWidth(5)}px;
`