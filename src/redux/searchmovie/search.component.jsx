import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function (props) {
    
    return (
      <div id="movie">
        
        <form onSubmit={props.searchbyTitle} class="form-inline my-2 my-lg-0">
          <div>
            <input type="text" placeholder="pelicula a buscar" onChange={props.changeHandler}/>
          </div>
          <button type="submit">Buscar peli!</button>
        </form>
        <div className='container'>
    { props.movies.movies.Search ? props.movies.movies.Search.map(movie => (
    <div key={movie.imdbID} class="card" style={{width: '18rem'}}>
            <img src={movie.Poster} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{movie.Title}</h5>
                <p class="card-text">{movie.Plot}</p>
                <Link to={`/moviedetail/${movie.imdbID}`}>VER DETALLE</Link>
                <button type="submit" onClick={() => props.addFavorita(movie.imdbID)}>Agregar a Favoritos</button>
            </div>
            
        </div>

        )) : <p>Tu busqueda retorna demasiados registros o es invalida</p>
    }
    

      </div>
      </div>
    );
  }
  