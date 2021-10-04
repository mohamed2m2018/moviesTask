import axios from 'axios';
import { Dispatch } from 'redux';
import {
    GET_ALL_POPULAR_MOVIES,
    GET_ALL_POPULAR_MOVIES_FAILED,
    GET_ALL_POPULAR_MOVIES_SUCCESS,
    GET_ALL_TOPRATED_MOVIES,
    GET_ALL_TOPRATED_MOVIES_FAILED,
    GET_ALL_TOPRATED_MOVIES_SUCCESS,
    GET_ALL_UPCOMING_MOVIES,
    GET_ALL_UPCOMING_MOVIES_FAILED,
    GET_ALL_UPCOMING_MOVIES_SUCCESS,
    GET_MOVIE_CREDITS,
    GET_MOVIE_CREDITS_SUCCESS,
    GET_MOVIES_CREDITS_FAILS,
} from '../actionTypes';

const getAllPopularMovies = (givenParams = { page: 1 },) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_ALL_POPULAR_MOVIES
        });

        const params = {
            api_key: '4f298a53e552283bee957836a529baec',
            ...givenParams,
        };

        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params
            })
            dispatch({
                type: GET_ALL_POPULAR_MOVIES_SUCCESS,
                payload: {
                    ...response.data as {},
                    params,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_ALL_POPULAR_MOVIES_FAILED,
                payload: err,
            });
        }

    };
};

const getUpcomingMovies = (givenParams = { page: 1 },) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_ALL_UPCOMING_MOVIES
        });

        const params = {
            api_key: '4f298a53e552283bee957836a529baec',
            ...givenParams,
        };

        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
                params
            })
            dispatch({
                type: GET_ALL_UPCOMING_MOVIES_SUCCESS,
                payload: {
                    ...response.data as {},
                    params,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_ALL_UPCOMING_MOVIES_FAILED,
                payload: err,
            });
        }

    };
};

const getTopRatedMovies = (givenParams = { page: 1 },) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_ALL_TOPRATED_MOVIES
        });

        const params = {
            api_key: '4f298a53e552283bee957836a529baec',
            ...givenParams,
        };

        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
                params
            })
            dispatch({
                type: GET_ALL_TOPRATED_MOVIES_SUCCESS,
                payload: {
                    ...response.data as {},
                    params,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_ALL_TOPRATED_MOVIES_FAILED,
                payload: err,
            });
        }

    };

};

const getMovieCredits = (id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: GET_MOVIE_CREDITS
        });

        const params = {
            api_key: '4f298a53e552283bee957836a529baec',
        };

        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                params
            })
            dispatch({
                type: GET_MOVIE_CREDITS_SUCCESS,
                payload: {
                    ...response.data as {},
                    params,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_MOVIES_CREDITS_FAILS,
                payload: err,
            });
        }

    };
};



export { getAllPopularMovies, getTopRatedMovies, getUpcomingMovies, getMovieCredits };