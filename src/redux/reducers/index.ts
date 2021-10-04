import { genres } from './genres';
import { combineReducers } from 'redux'
import { popularMovies, upcomingMovies, topRatedMovies } from './movies'
import credits from './movieCredit'
export default combineReducers({
    popularMovies,
    upcomingMovies,
    topRatedMovies,
    genres,
    credits
})