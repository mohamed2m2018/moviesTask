import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getAllGeneres} from '../redux/actions/genresActions';
import MovieCard from './MovieCard';
import {GenresReducer, RootState} from '../redux/Model';
import styled from 'styled-components/native';
import {colors, testIds} from '../constants';
import {perfectHeight} from '../helpers/commonFunctions';

interface Props {
  movies: Object[];
  hasMore: boolean;
  fetching: boolean;
  action: Function;
  page: number;
}

const MoviesList = ({movies, hasMore, fetching, action, page}: Props) => {
  const genres = useSelector((state: RootState) => state.genres.genres);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    if (movies?.length === 0) {
      dispatch(
        action?.({
          page,
        }),
      );
      dispatch(getAllGeneres());
    }
  }, [action, dispatch, movies?.length, page]);

  const renderItem = useCallback(
    ({item}) => {
      return (
        <MovieCard
          title={item?.title}
          date={item?.release_date}
          uri={item?.poster_path}
          rating={((item?.vote_average / 10) * 100).toFixed(0)}
          genres={item?.genre_ids?.map((id: string) => genres?.[id])}
          onPress={() =>
            navigation.navigate(
              'MovieDetails' as never,
              {
                title: item?.title,
                uri: item?.poster_path,
                overview: item?.overview,
                rating: ((item?.vote_average / 10) * 100).toFixed(0),
                genres: item?.genre_ids?.map(
                  (id: string) => genres?.[id as keyof GenresReducer],
                ),
                id: item?.id,
              } as never,
            )
          }
        />
      );
    },
    [genres, navigation],
  );

  const handleLoadMore = () => {
    if (hasMore && !fetching) {
      dispatch(action({page: page + 1}));
    }
  };
  return (
    <FlatList
      data={movies as []}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: {id: number}, index: number) =>
        item?.id + index?.toString()
      }
      onEndReachedThreshold={1}
      testID={testIds.MOVIES_FLATLIST}
      onEndReached={handleLoadMore}
      ListFooterComponent={() => {
        if (fetching) {
          return <ActivityIndicator size="large" color={colors.black} />;
        }
        return null;
      }}
    />
  );
};

const ActivityIndicator = styled.ActivityIndicator`
  margin-top: ${perfectHeight(10)}px;
`;

export default React.memo(MoviesList);
