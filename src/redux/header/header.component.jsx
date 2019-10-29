import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) { 
  
  return (
  <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">OMDB</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    { !props['user'] ?
      <li class="nav-item">
        <Link class="nav-link" to="/signup">Crear Usuario</Link>
      </li>
      :
      <span></span>
      }

      { props['user'] ?
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/searchmovies">Buscar Peliculas</Link>
      </li>
      :
      <span></span>
    }
    { props['user'] ?
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/favoritas">Mis Favoritas</Link>
      </li>
      :
      <span></span>
      }
       { props['user'] ?
      <li class="nav-item">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
        <Link class="nav-link" to="/allusers">Ver Usuarios</Link>
      </li>
      :
      <span></span>
      }
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
    
 { !props['user'] ?
    <form className="form-inline my-2 my-lg-0" onSubmit={props.SubmitLogin}>
      <input class="form-control mr-sm-2" type="search" placeholder="usuario" onChange={props.UsernamechangeHandler}/>
      <input class="form-control mr-sm-2" type="search" placeholder="contraseña" onChange={props.PasswordchangeHandler}/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
    </form>
    :
    
    <div><span>CONECTADO</span>
    <button class="btn btn-outline-warning my-2 my-sm-0" onClick={props.SubmitLogout}>Logout</button>
    </div>
  }
    

  </div>
</nav>
</div>
  );
}