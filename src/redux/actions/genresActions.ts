import axios from 'axios';
import { GET_GENRES_START, GET_GENRES_FAIL, GET_GENRES_SUCCESS } from '../actionTypes';


const getAllGeneres = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_GENRES_START
        });
        const params = {
            api_key: '4f298a53e552283bee957836a529baec',
        };
        try {
            const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
                params
            })
            dispatch({
                type: GET_GENRES_SUCCESS,
                payload: {
                    ...response.data,
                },
            })
        }
        catch (err) {
            dispatch({
                type: GET_GENRES_FAIL,
                payload: err,
            });
        }

    };

};


export { getAllGeneres };