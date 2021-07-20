
import React, { useState } from 'react';
import { Input, Button, Row, Col,Container } from 'reactstrap';
import classnames from 'classnames';
import '../estilos/Principal.css';

function Principal(props){

  const [palabras, setPalabras] = useState(["","","","","","","","","","","","","","","","","","","","",]);


  const entrada=(e)=>{
    const aux=palabras
    aux[parseInt(e.target.name)]=e.target.value
    setPalabras(aux)
  }

  const listaPalabras=palabras.map((item,i)=>
  <div key={i}>
    <br/>
    <Input name={i} placeholder="Ingresar palabra" key={i} onChange={entrada} maxLength="10"></Input>
  </div>
  )

  return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12">

              <h3>A continuación ingresar las palabras para la sopa de letras: </h3>
            </Col>
          </Row>
          <Row>
            <Col sm="12">

              {listaPalabras}
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={{size:6, offset:6}}>

              <Button onClick={()=>props.arrayPalabras(palabras)}>Guardar</Button>
            </Col>
          </Row>
        </Container>

    </div>
  );
}

export default Principal;
