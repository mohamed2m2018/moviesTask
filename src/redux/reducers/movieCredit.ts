import {MovieCreditPayload} from './../Model/index';
import {
  GET_MOVIE_CREDITS,
  GET_MOVIE_CREDITS_SUCCESS,
  GET_MOVIES_CREDITS_FAILS,
} from './../actionTypes/index';

const initialState = {
  credits: [],
  fetching: false,
};

export const credits = (state = initialState, action: MovieCreditPayload) => {
  switch (action.type) {
    case GET_MOVIE_CREDITS: {
      return {
        ...state,
        credits: [],
        fetching: true,
      };
    }
    case GET_MOVIE_CREDITS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        credits: action.payload?.cast,
      };
    }
    case GET_MOVIES_CREDITS_FAILS: {
      return {
        ...state,
        fetching: false,
      };
    }

    default:
      return state;
  }
};

export default credits;
