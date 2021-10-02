
import React, { useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';

import MovieCard from './src/components/MovieCard';
import store from './src/redux';
import { getAllGeneres } from './src/redux/actions/genresActions';
import { getAllMovies } from './src/redux/actions/moviesActions';


const Inner = () => {
  const { movies, params: { page }, hasMore, fetching } = useSelector(state => state.movies)
  const genres = useSelector(state => state.genres.genres)
  const dispatch = useDispatch();


  const renderItem = useCallback(({ item }) => {
    return (
      <MovieCard
        title={item?.title}
        date={item?.release_date}
        uri={item?.poster_path}
        rating={((item?.vote_average / 10) * 100).toFixed(0)}
        genres={item?.genre_ids?.map(id => genres?.[id])}
      />

    );
  }, [genres]);

  const handleLoadMore = () => {
    if (hasMore && !fetching)
      dispatch(getAllMovies({ page: page + 1 }))
  }
  useEffect(() => {
    dispatch(getAllMovies({
      page
    }))
    dispatch(getAllGeneres())
  }, [])

  return <SafeAreaView style={styles.screen}>
    <StatusBar />

    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={1}
      onEndReached={handleLoadMore}
      ListFooterComponent={() => {
        if (fetching) {
          return (
            <ActivityIndicator size='small' />
          )
        }
        return null
      }}
    />

  </SafeAreaView>
}

const App = () => {




  return (
    <Provider store={store}>
      <Inner />
    </Provider>

  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F6F8',
    flex: 1
  }
});

export default App;
