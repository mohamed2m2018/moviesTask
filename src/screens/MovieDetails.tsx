import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {perfectHeight} from '../helpers/commonFunctions';
import styled from 'styled-components/native';
import Genres from '../components/Genres';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieCredits} from '../redux/actions/moviesActions';
import CastMember from '../components/CastMember';
import {RouteProp} from '@react-navigation/native';
import {CreditElement, RootState} from '../redux/Model';
import {colors} from '../constants';

type ParamList = {
  MovieDetails: {
    title: string;
    uri: string;
    rating: string;
    overview: string;
    genres: string[];
    id: string;
  };
};

const MovieDetails = () => {
  const {
    params: {title, uri, rating, overview, genres, id},
  } = useRoute<RouteProp<ParamList, 'MovieDetails'>>();
  const dispatch = useDispatch();
  const {credits} = useSelector((state: RootState) => state.credits);

  useEffect(() => {
    dispatch(getMovieCredits(id));
  }, [dispatch, id]);

  return (
    <ScrollView>
      <UpperContainer>
        <Image source={{uri: 'https://image.tmdb.org/t/p/original/' + uri}} />
        <Title>{title}</Title>
        <Rating>{rating}%</Rating>
      </UpperContainer>
      <Title>Overview</Title>
      <Description>{overview}</Description>
      <Title>Genres</Title>
      <Row>
        {genres?.map((name: string, index: number) => (
          <Genres key={index} text={name} />
        ))}
      </Row>
      <Title>Credits</Title>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {credits?.map(({name, profile_path}: CreditElement, index: number) => (
          <CastMember
            key={index}
            name={name}
            uri={'https://image.tmdb.org/t/p/original/' + profile_path}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default MovieDetails;

const UpperContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${perfectHeight(50)}px;
`;
const Image = styled.Image`
  width: ${perfectHeight(140)}px;
  aspect-ratio: 0.7;
  margin-bottom: ${perfectHeight(15)}px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 23px;
  margin-bottom: ${perfectHeight(10)}px;
`;
const Rating = styled.Text`
  color: ${colors.green};
  font-size: 30px;
  font-weight: bold;
`;
const Description = styled.Text`
  font-size: 15px;
  margin-bottom: ${perfectHeight(10)}px;
`;
const Row = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: ${perfectHeight(10)}px;
`;

const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {marginBottom: perfectHeight(10)},
})``;
