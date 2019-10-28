import React from 'react';
import { connect } from 'react-redux';
import store from '../store';


export default function (props) {
    
    return (
      <div id="movie">
        <form onSubmit={props.searchbyTitle}>
          <div>
            <input type="text" placeholder="search for a Movie" onChange={props.changeHandler}/>
          </div>
          <button type="submit">Search for Lyrics</button>
        </form>
{ props.movie.movie.Title ?

    <div class="card" style={{width: '18rem'}}>
        <img src={props.movie.movie.Poster} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.movie.movie.Title}</h5>
            <p class="card-text">{props.movie.movie.Plot}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    :
    <p>Please search for a valid movie!</p>

}
       
       





      </div>
    );
  }
  