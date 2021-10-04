import React, { useState } from 'react'
import styled from 'styled-components'
import { perfectHeight, perfectWidth } from '../helpers/commonFunctions'



interface Props {
  selectedIndex: number,
  setSelectedIndex: (number: number) => void
}

const TabsContainer = ({ selectedIndex, setSelectedIndex }: Props) => {
  const tabs: string[] = ['Upcoming', 'Popular', 'Top Rated']
  return (
    <Row>
      {tabs?.map((item, index) => {
        return <Tab selected={index === selectedIndex} onPress={() => {
          setSelectedIndex(index)
        }} key={index}>
          <TabText selected={index === selectedIndex}>
            {item}
          </TabText>
        </Tab>
      }
      )}

    </Row>
  )
}

export default TabsContainer

const Row = styled.View`
  flex-direction: row;
  margin-bottom: ${perfectHeight(10)}px;
`
const Tab = styled.TouchableOpacity`
  padding: ${perfectWidth(10)}px;
  background-color:${({ selected }) => selected ? '#73F340' : '#d8d8d8'} ;
  margin-right: ${perfectWidth(5)}px;
  border-radius: 15px;
`
const TabText = styled.Text`
  color:${({ selected }) => selected ? '#fff' : '#000'} ;
  font-weight: bold;
`