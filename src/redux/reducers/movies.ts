import {MoviesPayload} from './../Model/index';
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
} from './../actionTypes/index';

const initialState = {
  movies: [],
  fetching: false,
  hasMore: false,
  params: {
    page: 1,
  },
};

export const upcomingMovies = (state = initialState, action: MoviesPayload) => {
  switch (action.type) {
    case GET_ALL_UPCOMING_MOVIES: {
      return {
        ...state,
        fetching: true,
      };
    }

    case GET_ALL_UPCOMING_MOVIES_SUCCESS: {
      const params = {...action.payload.params};
      return {
        ...state,
        fetching: false,
        movies: [...state?.movies, ...action?.payload?.results],
        hasMore: action?.payload?.total_pages > params.page,
        params,
      };
    }
    case GET_ALL_UPCOMING_MOVIES_FAILED: {
      return {
        ...state,
        fetching: false,
      };
    }

    default:
      return state;
  }
};

export const popularMovies = (state = initialState, action: MoviesPayload) => {
  switch (action.type) {
    case GET_ALL_POPULAR_MOVIES: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GET_ALL_POPULAR_MOVIES_SUCCESS: {
      const params = {...action.payload.params};
      return {
        ...state,
        fetching: false,
        movies: [...state?.movies, ...action?.payload?.results],
        hasMore: action?.payload?.total_pages > params.page,
        params,
      };
    }
    case GET_ALL_POPULAR_MOVIES_FAILED: {
      return {
        ...state,
        fetching: false,
      };
    }

    default:
      return state;
  }
};

export const topRatedMovies = (state = initialState, action: MoviesPayload) => {
  switch (action.type) {
    case GET_ALL_TOPRATED_MOVIES: {
      return {
        ...state,
        fetching: true,
      };
    }
    case GET_ALL_TOPRATED_MOVIES_SUCCESS: {
      const params = {...action.payload.params};
      return {
        ...state,
        fetching: false,
        movies: [...state?.movies, ...action?.payload?.results],
        hasMore: action?.payload?.total_pages > params.page,
        params,
      };
    }
    case GET_ALL_TOPRATED_MOVIES_FAILED: {
      return {
        ...state,
        fetching: false,
      };
    }

    default:
      return state;
  }
};

export default {upcomingMovies, topRatedMovies, popularMovies};
