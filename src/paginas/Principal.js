
import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../estilos/Principal.css';
import EntryWords from '../componentes/entryWords'
import VisualSopa from '../componentes/visualSopa'

function Principal(props){

  const [activeTab, setActiveTab] = useState('1');
  const [words,setWords]=useState([]);
  const [matriz,setMatriz]=useState([[]])

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const recibirWords= (array)=>{
    console.log(array)
    setWords(array)
    let matrizAux=[[]]
    array.map((item,i)=>matrizAux[i]=item.split(""))
    console.log(matrizAux)
    setMatriz(matrizAux)
  }

  return (
      <div className="contenedor">
      <br/>
      <h5>A continuación ingresa a la casilla de entrada de datos para regsitrar las 20 palabras que se colocaran en la sopa de letras.
      Hecho esto cliqueas en guardar y pasas a la ventana de "sopa de letras", donde verás el listado de tus palabras, luego presionas
      "Random" y se establecera la sopa de letras.</h5>
      <br/>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Entrada de palabras
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Sopa de letras
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <EntryWords arrayPalabras={recibirWords}/>
        </TabPane>
        <TabPane tabId="2">
          <VisualSopa arrayPalabras={words} matrizLetras={matriz}/>
        </TabPane>
      </TabContent>
      <br/>
      <Row>
        <Col>
          <a href="https://bifrost-apps.com">Desarrollado por Edgar Stiven Díaz Roa</a>
        </Col>
      </Row>
    </div>
  );
}

export default Principal;
