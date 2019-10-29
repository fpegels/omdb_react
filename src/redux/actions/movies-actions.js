import axios from 'axios'
// import { baseURL } from '../../config'


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


  export const setFavoritas = function(favoritas){
    return {
        type: 'SET_MOVIE_FAVORITAS',
        favoritas: favoritas
    }
  }


  export const fetchFavoritas = function (authToken) {
    return function (dispatch, getState) {
        axios.get(`http://localhost:3000/users/favoritas`, {headers: {
            'Authorization': 'bearer ' + authToken,
          }})
        .then(response => {
            dispatch(setFavoritas(response.data.favoritas)); 

            // if (newuser.data.success) dispatch(setUserName_Temp(newuser.data.username))
        //   dispatch(setMovie(movie.data)); 
        });
    };
  };

  export const addFavorita = function (authToken, favorita) {
    console.log("@@@@ enviado este imdbID", favorita)
    return function (dispatch, getState) {
        axios.put(`http://localhost:3000/users/favoritas`, {favorita: favorita}, {headers: {
            'Authorization': 'bearer ' + authToken,
          }})
        .then(response => {
            // dispatch(setFavoritas(response.data.favoritas)); 
        alert(`La pelicula con imdbID: ${favorita} fue agregada exitosamente`)
            // if (newuser.data.success) dispatch(setUserName_Temp(newuser.data.username))
        //   dispatch(setMovie(movie.data)); 
        });
    };
  };

  export const removeFavorita = function (authToken, favorita) {
    console.log("@@@@ enviado este imdbID", favorita)
    return function (dispatch, getState) {
        axios.post(`http://localhost:3000/users/favoritas`, {favorita: favorita}, {headers: {
            'Authorization': 'bearer ' + authToken,
          }})
        .then(response => {
            // dispatch(setFavoritas(response.data.favoritas)); 
        alert(`La pelicula con imdbID: ${favorita} fue eliminada exitosamente`)
            // if (newuser.data.success) dispatch(setUserName_Temp(newuser.data.username))
        //   dispatch(setMovie(movie.data)); 
        });
    };
  };

