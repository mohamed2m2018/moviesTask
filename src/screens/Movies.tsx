import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import MoviesList from '../components/MoviesList';
import TabsContainer from '../components/TabsContainer';
import {colors} from '../constants';
import {perfectHeight, perfectWidth} from '../helpers/commonFunctions';
import {
  getAllPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../redux/actions/moviesActions';
import {RootState} from '../redux/Model';

const Movies = () => {
  const {
    movies: popularMovies,
    params: {page: popularMoviesPage},
    hasMore: hasMorePopular,
    fetching: fetchingPopular,
  } = useSelector((state: RootState) => state.popularMovies);
  const {
    movies: upcomingMovies,
    params: {page: upComingMoviespage},
    hasMore: hasMoreUpcoming,
    fetching: fetchingUpcoming,
  } = useSelector((state: RootState) => state.upcomingMovies);
  const {
    movies: topRatedMovies,
    params: {page: topRatedMoviesPage},
    hasMore: hasMoreTopRated,
    fetching: fetchingTopRated,
  } = useSelector((state: RootState) => state.topRatedMovies);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <SafeAreaView>
      <StatusBar />
      <Title>Movies</Title>
      <TabsContainer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      {selectedIndex === 0 && (
        <MoviesList
          movies={upcomingMovies}
          hasMore={hasMoreUpcoming}
          fetching={fetchingUpcoming}
          action={getUpcomingMovies}
          page={upComingMoviespage}
        />
      )}
      {selectedIndex === 1 && (
        <MoviesList
          movies={popularMovies}
          hasMore={hasMorePopular}
          fetching={fetchingPopular}
          action={getAllPopularMovies}
          page={popularMoviesPage}
        />
      )}
      {selectedIndex === 2 && (
        <MoviesList
          movies={topRatedMovies}
          hasMore={hasMoreTopRated}
          fetching={fetchingTopRated}
          action={getTopRatedMovies}
          page={topRatedMoviesPage}
        />
      )}
    </SafeAreaView>
  );
};

const SafeAreaView = styled.SafeAreaView`
  background-color: ${colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  align-self: flex-start;
  font-size: 25px;
  font-weight: bold;
  margin-left: ${perfectWidth(20)}px;
  margin-bottom: ${perfectHeight(10)}px;
  margin-top: ${perfectHeight(10)}px;
`;

export default Movies;
