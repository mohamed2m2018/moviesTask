import React from 'react';
import styled from 'styled-components/native';
import {colors, testIds} from '../constants';
import {perfectHeight, perfectWidth} from '../helpers/commonFunctions';
import Genres from './Genres';

interface Props {
  title: string;
  date: string;
  genres: string[];
  uri: string;
  rating: string;
  onPress: () => void;
}

const MovieCard = ({title, date, uri, rating, genres, onPress}: Props) => {
  return (
    <OuterContainer testID={testIds.MOVIE_CARD_TOUCHABLE} onPress={onPress}>
      <FirstColumn>
        <Image
          resizeMode={'cover'}
          source={{uri: 'https://image.tmdb.org/t/p/original/' + uri}}
        />
      </FirstColumn>
      <MiddleColumn>
        <MainText testID={testIds.MOVIE_CARD_TITLE}>{title}</MainText>
        <DateText testID={testIds.MOVIE_CARD_DATE}>{date}</DateText>
        <Row>
          {genres.map((name: string, index: number) => (
            <Genres key={index} text={name} />
          ))}
        </Row>
      </MiddleColumn>
      <LastColumn>
        <RatingText testID={testIds.MOVIE_CARD_RATING}>{rating}%</RatingText>
      </LastColumn>
    </OuterContainer>
  );
};

export default MovieCard;

const OuterContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-vertical: ${perfectHeight(10)}px;
  padding: ${perfectHeight(10)}px;
  border-radius: 10px;
  background-color: white;
  width: ${perfectWidth(350)}px;
`;
const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const FirstColumn = styled.View`
  flex-direction: column;
  width: ${perfectWidth(120)}px;
`;

const MiddleColumn = styled.View`
  flex-direction: column;
  width: ${perfectWidth(160)}px;
`;

const LastColumn = styled.View`
  flex-direction: column;
  justify-content: flex-end;
`;
const Image = styled.Image`
  height: ${perfectHeight(120)}px;
  width: ${perfectWidth(100)}px;
  border-radius: 10px;
`;
const MainText = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${colors.black};
`;
const DateText = styled.Text`
  font-size: 15px;
  margin-bottom: 20px;
  color: ${colors.black};
`;

const RatingText = styled.Text`
  color: ${colors.green};
  font-size: 20px;
  font-weight: bold;
`;
