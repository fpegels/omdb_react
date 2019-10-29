import React from 'react';
// import { Link, Route } from 'react-router-dom';


export default function (props) {
    
    return (
  <div>
    {
      props.favoritas.map(imdbID => (
        <div key={imdbID} class="card" style={{width: '18rem'}}>
                {/* <img src={movie.Poster} class="card-img-top" alt="..."/> */}
                <div class="card-body">
                    <h5 class="card-title">{imdbID}</h5>
                    {/* <p class="card-text">{movie.Plot}</p> */}
                    <button type="submit" onClick={() => props.removeFavorita(imdbID)}>Eliminar de Favoritos</button>
                </div>
                
            </div>
    
            ))
    }
      </div>
    );
  }
  