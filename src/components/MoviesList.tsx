import React, { useCallback, useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import { getAllGeneres } from '../redux/actions/genresActions';
import MovieCard from './MovieCard';
import { GenresReducer, RootState } from '../redux/Model'




interface Props {
    movies: Object[],
    hasMore: boolean,
    fetching: boolean,
    action: Function,
    page: number,
}


const MoviesList = ({ movies, hasMore, fetching, action, page }: Props) => {
    const genres = useSelector((state: RootState) => state.genres.genres)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    useEffect(() => {
        if (movies?.length === 0) {
            dispatch(action?.({
                page,
            }))
            dispatch(getAllGeneres())
        }

    }, [])

    const renderItem = useCallback(({ item }) => {
        return (
            <MovieCard
                title={item?.title}
                date={item?.release_date}
                uri={item?.poster_path}
                rating={((item?.vote_average / 10) * 100).toFixed(0)}
                genres={item?.genre_ids?.map((id: string) => genres?.[id])}
                onPress={() => navigation.navigate('MovieDetails' as never, {
                    title: item?.title,
                    uri: item?.poster_path,
                    overview: item?.overview,
                    rating: ((item?.vote_average / 10) * 100).toFixed(0),
                    genres: item?.genre_ids?.map((id: string) => genres?.[id as keyof GenresReducer]),
                    id: item?.id,
                } as never)}
            />

        );
    }, [genres]);

    const handleLoadMore = () => {
        if (hasMore && !fetching) {
            dispatch(action({ page: page + 1 }))
        }
    }
    return (
        <FlatList
            data={movies as []}
            renderItem={renderItem}
            keyExtractor={(item: { id: number }, index: number) => item?.id + index?.toString()}
            onEndReachedThreshold={1}
            onEndReached={handleLoadMore}
            ListFooterComponent={() => {
                if (fetching) {
                    return (
                        <ActivityIndicator style={{ marginTop: 10 }} size='large' color={'black'} />
                    )
                }
                return null
            }}
        />

    )
}

export default React.memo(MoviesList)
