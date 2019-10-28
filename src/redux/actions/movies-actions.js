import axios from 'axios'
import { baseURL } from '../../config'


export const setMovie = function(movie){
    return {
        type: 'SET_MOVIE',
        movie: movie
    }
}

export const fetchMovie = function (text) {
    return function (dispatch, getState) {
      axios.get(`https://www.omdbapi.com/?apikey=20dac387&t=${text}`)
        .then(movie => {
          dispatch(setMovie(movie.data)); 
        });
    };
  };

// export const fetchMovies = function (artist, song) {
//     return function (dispatch, getState) {
//       axios.get(`/api/lyrics/${artist}/${song}`)
//         .then(res => {
//           dispatch(setLyrics(res.data.lyric)); 
//         });
//     };
//   };