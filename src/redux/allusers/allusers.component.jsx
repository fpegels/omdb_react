import React from 'react';
// import { Link, Route } from 'react-router-dom';


export default function (props) {
    
    return (
  <div className='container'>
      {  props.allusers ?
          props.allusers.map(user => (
            <div key={user._id} class="card" style={{width: '10rem'}}>
                    <img src="https://previews.123rf.com/images/urfandadashov/urfandadashov1808/urfandadashov180818343/108180118-user-vector-icon-isolated-on-transparent-background-user-logo-concept.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{user.username}</h5>
                    </div>
                    Favoritos:
                    <ul class="list-group list-group-flush">
                    { user.favoritas.map(favorita => (
                        <li key={favorita} class="list-group-item">{favorita}</li>
                    ))
               
                    }
                    </ul>
                </div>
        
                ))
                :
                <p>loading...</p>
      }
      </div>
    );
  }
  