import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../constants';
import {perfectHeight, perfectWidth} from '../helpers/commonFunctions';

interface Props {
  selectedIndex: number;
  setSelectedIndex: (number: number) => void;
}

const TabsContainer = ({selectedIndex, setSelectedIndex}: Props) => {
  const tabs: string[] = ['Upcoming', 'Popular', 'Top Rated'];
  return (
    <Row>
      {tabs?.map((item, index) => {
        return (
          <Tab
            selected={index === selectedIndex}
            onPress={() => {
              setSelectedIndex(index);
            }}
            key={index}>
            <TabText selected={index === selectedIndex}>{item}</TabText>
          </Tab>
        );
      })}
    </Row>
  );
};

export default TabsContainer;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: ${perfectHeight(10)}px;
`;
const Tab = styled.TouchableOpacity`
  padding-vertical: ${perfectWidth(10)}px;
  padding-horizontal: ${perfectWidth(20)}px;
  background-color: ${({selected}: {selected: boolean}) =>
    selected ? colors.green : colors.grey};
  margin-right: ${perfectWidth(5)}px;
  border-radius: 20px;
`;
const TabText = styled.Text`
  color: ${({selected}: {selected: boolean}) =>
    selected ? colors.white : colors.black};
  font-weight: bold;
`;
