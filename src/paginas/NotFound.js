import React from 'react';
import { Link } from 'react-router-dom';
import {  Button } from 'reactstrap';

function NotFound() {
  return (<div>
    <Link to="/"><Button>Ir a sopa de letras</Button></Link>

  </div>);
}

export default NotFound;
