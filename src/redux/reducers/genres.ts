import { GET_GENRES_START, GET_GENRES_FAIL, GET_GENRES_SUCCESS } from '../actionTypes';

const initialState = {
    generes: {},
    fetching: false,
}

const processGenres = (genres) => {
    let genresMapping = {}
    genres.forEach((element) => {
        genresMapping = { ...genresMapping, [element.id]: element.name }
    })
    return genresMapping

}

export const genres = (state = initialState, action) => {
    switch (action.type) {
        case GET_GENRES_START:
            return {
                ...state,
                fetching: true,
            }
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                fetching: false,
                genres: processGenres(action?.payload?.genres),
            }
        case GET_GENRES_FAIL:
            return {
                ...state,
                fetching: false,
            }
        default:
            return state
    }
}



export default genres