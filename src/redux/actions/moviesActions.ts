import axios from 'axios';
import { GET_ALL_MOVIES, GET_ALL_MOVIES_FAILED, GET_ALL_MOVIES_SUCCESS } from '../actionTypes';


const getAllMovies = (givenParams = { page: 1 },) => {
    return async (dispatch) => {
        dispatch({
            type: GET_ALL_MOVIES
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
                type: GET_ALL_MOVIES_SUCCESS,
                payload: {
                    ...response.data,
                    params,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_ALL_MOVIES_FAILED,
                payload: err,
            });
        }

    };

};


export { getAllMovies };