import React, { useState } from 'react'
import { Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MoviesList from '../components/MoviesList'
import TabsContainer from '../components/TabsContainer'
import { getAllPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../redux/actions/moviesActions'
import { RootState } from '../redux/Model'

const Movies = () => {
    const { movies: popularMovies, params: { page: popularMoviesPage }, hasMore: hasMorePopular, fetching: fetchingPopular } =
        useSelector((state: RootState) => state.popularMovies)
    const { movies: upcomingMovies, params: { page: upComingMoviespage }, hasMore: hasMoreUpcoming, fetching: fetchingUpcoming } =
        useSelector((state: RootState) => state.upcomingMovies)
    const { movies: topRatedMovies, params: { page: topRatedMoviesPage }, hasMore: hasMoreTopRated, fetching: fetchingTopRated } =
        useSelector((state: RootState) => state.topRatedMovies)

    const [selectedIndex, setSelectedIndex] = useState<number>(0)



    return <SafeAreaView style={styles.screen}>
        <StatusBar />
        <Text style={{ alignSelf: 'flex-start', fontSize: 25, fontWeight: 'bold', marginStart: 20, marginBottom: 10 }}>Movies</Text>
        <TabsContainer selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        {selectedIndex === 0 && <MoviesList
            movies={upcomingMovies}
            hasMore={hasMoreUpcoming}
            fetching={fetchingUpcoming}
            action={getUpcomingMovies}
            page={upComingMoviespage}
        />}
        {selectedIndex === 1 && <MoviesList
            movies={popularMovies}
            hasMore={hasMorePopular}
            fetching={fetchingPopular}
            action={getAllPopularMovies}
            page={popularMoviesPage}
        />}
        {
            selectedIndex === 2 && <MoviesList
                movies={topRatedMovies}
                hasMore={hasMoreTopRated}
                fetching={fetchingTopRated}
                action={getTopRatedMovies}
                page={topRatedMoviesPage}
            />
        }
    </SafeAreaView>
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#F6F6F8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Movies
