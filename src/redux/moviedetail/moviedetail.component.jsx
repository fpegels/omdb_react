import React from 'react';


export default function (props) {
    
    return (
    <div>
        { props.movie.Title ?
    <div class="card" style={{width: '18rem'}}>
        <img src={props.movie.Poster} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.movie.Title}</h5>
            <p class="card-text">{props.movie.Plot}</p>
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
    </div> : <p>Loading...</p>
    }
    </div>
   

    );
  }
  