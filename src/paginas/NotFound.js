import React from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'reactstrap';

function NotFound() {
  return (<div>
    <br/>
    <h1>Esta no es la pagina principal</h1>
    <Link to="/"><Button>Ir a sopa de letras</Button></Link>

  </div>);
}

export default NotFound;
