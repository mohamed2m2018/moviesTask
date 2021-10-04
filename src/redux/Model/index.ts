export interface MoviesReducer {
  movies: Object[];
  fetching: boolean;
  hasMore: boolean;
  params: {
    page: number;
  };
}
export interface GenresReducer {
  genres: {
    [id: string]: Object;
  };
  fetching: boolean;
}

export interface CreditElement {
  name: string;
  profile_path: string;
}

export interface MovieCreditReducer {
  credits: CreditElement[];
  fetching: boolean;
}

export interface GenresPayLoad {
  payload: {genres: {id: string; name: string}[]};
  type: string;
}

export interface MovieCreditPayload {
  payload: {
    cast: Object[];
  };
  type: string;
}

export interface MoviesPayload {
  payload: {
    results: Object[];
    total_pages: number;
    params: {
      page: number;
    };
  };
  type: string;
}

export interface RootState {
  popularMovies: MoviesReducer;
  upcomingMovies: MoviesReducer;
  topRatedMovies: MoviesReducer;
  genres: GenresReducer;
  credits: MovieCreditReducer;
}
