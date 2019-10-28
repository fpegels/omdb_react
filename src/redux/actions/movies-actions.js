import axios from 'axios'
import { baseURL } from '../../config'


export const setMovies = function(movies){
    return {
        type: 'SET_MOVIES',
        movies: movies
    }
}

export const setMovie = function(movie){
  return {
      type: 'SET_MOVIE',
      movie: movie
  }
}

export const fetchMovies = function (text) {
    return function (dispatch, getState) {
      axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${text}`)
        .then(movies => {
          dispatch(setMovies(movies.data)); 
        });
    };
  };

  export const fetchMovie = function (text) {
    return function (dispatch, getState) {
      dispatch(setMovie({})) //to clear actual movie before fetching next movie
      axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${text}`)
        .then(movie => {
          dispatch(setMovie(movie.data)); 
        });
    };
  };