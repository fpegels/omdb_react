import React from 'react';
import { Link, Route } from 'react-router-dom';


export default function (props) {
    
    return (
      <div id="movie" className="container-fluid">
        
        <form onSubmit={props.searchbyTitle}>
          <div>
            <input type="text" placeholder="search for a Movie" onChange={props.changeHandler}/>
          </div>
          <button type="submit">Search for Lyrics</button>
        </form>

    { props.movies.movies.Search ? props.movies.movies.Search.map(movie => (
    <div key={movie.imdbID} class="card" style={{width: '18rem'}}>
            <img src={movie.Poster} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{movie.Title}</h5>
                <p class="card-text">{movie.Plot}</p>
                <Link to={`/moviedetail/${movie.imdbID}`}>VER DETALLE</Link>
            </div>
            
        </div>

        )) : <p>Tu busqueda retorna demasiados registros o es invalida</p>
    }
    

      </div>
    );
  }
  