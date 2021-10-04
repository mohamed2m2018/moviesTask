import React from 'react'
import styled from 'styled-components/native'
import { perfectWidth } from '../helpers/commonFunctions'


interface Props {
  uri: string,
  name: string,
}

const CastMember = ({ uri, name }: Props) => {
  return (
    <Container>
      <Image source={{ uri }} />
      <Title>{name}</Title>
    </Container>
  )
}

export default CastMember

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: ${perfectWidth(10)}px;
`
const Image = styled.Image`
  width:${perfectWidth(70)}px;
  aspect-ratio: 1;
  border-radius: ${perfectWidth(35)}px;
  margin-bottom: ${perfectWidth(10)}px;
`
const Title = styled.Text`
  
`
