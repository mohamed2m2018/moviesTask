import { GET_ALL_MOVIES_SUCCESS, GET_ALL_MOVIES_FAILED, GET_ALL_MOVIES } from './../actionTypes/index';

const initialState = {
    movies: [],
    fetching: false,
    hasMore: false,
    params: {
        page: 1,
    },
}


export const movies = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return {
                ...state,
                fetching: true,
            }
        case GET_ALL_MOVIES_SUCCESS:
            const params = { ...action.payload.params };
            return {
                ...state,
                fetching: false,
                movies: [...state?.movies, ...action?.payload?.results],
                hasMore: action?.payload?.total_pages > params.page,
                params,
            }
        case GET_ALL_MOVIES_FAILED:
            return {
                ...state,
                fetching: false,
            }
        default:
            return state
    }
}



export default movies