import React from 'react';
// import { Link, Route } from 'react-router-dom';


export default function (props) {
    
    return (
      <div className="container-fluid">
        
       { props.username_temp == "" ?
        <form onSubmit={props.SubmitRegistration}>
          <div>
            <input type="text" placeholder="usuario" onChange={props.UsernamechangeHandler}/>
            <input type="text" placeholder="contraseña" onChange={props.PasswordchangeHandler}/>
          </div>
          <button type="submit">Registrarme!</button>
        </form>
        :
        <p>Felicitaciones! Tu nuevo Nombre de Usuario es: {props.username_temp}
        <br/>
        Ingresa tu usuario y contrasena para loguearte.
        </p>
       }
  

      </div>
    );
  }
  