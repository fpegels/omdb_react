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
    </div> : <p>Loading...</p>
    }
    </div>
   

    );
  }
  