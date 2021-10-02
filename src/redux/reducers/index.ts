import { genres } from './genres';
import { combineReducers } from 'redux'
import movies from './movies'

export default combineReducers({
    movies,
    genres,
})