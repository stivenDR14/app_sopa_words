
import React, { useState } from 'react';
import { Container, Row, Col, Table, List, Button } from 'reactstrap';
import classnames from 'classnames';
import '../estilos/Principal.css';

function VisualSopa(props){

  const [arrayMostrar,setArrayMostrar]=useState([[]])

  let letras=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
  let arrayMayor=new Array(20)
  for (let ii = 0; ii < arrayMayor.length; ii++) {
    arrayMayor[ii] = new Array(20);
    arrayMayor[ii].fill("", 0, 19);
  }
  console.log(arrayMayor)

  const lista=props.arrayPalabras.map((item,i)=>
    <div key={i}>
      <li>{item}</li>
    </div>
  )

  const randomGenerator=(est, min, max)=>{
    if(est){
      return Math.round(Math.random())
    }else{
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  }

  const combinar=(matriz)=>{
    let indexActual = matriz.length,  indexRandom;

    while (0 !== indexActual) {

      indexRandom = Math.floor(Math.random() * indexActual);
      indexActual--;
      [matriz[indexActual], matriz[indexRandom]] = [
        matriz[indexRandom], matriz[indexActual]];
    }

    return matriz;
  }

  const handleRandom=()=>{
    const matrizPrincipal=combinar(props.matrizLetras)


    const numRandom22=randomGenerator(true,0,1)
    let cont=0
    matrizPrincipal.map((item,i)=>{
      item.length>0?cont=cont+1:cont=cont
    })
    console.log(cont)
    if(cont<20){
      alert("no se han introducido todas las palabras")
    }else{
      for (let kk = 0; kk < 20; kk++) {
        const numRandom4=randomGenerator(false,1,5)
        if(numRandom22===1){
          if(kk<3){

            //vertical
            arrayMayor.map((item,i)=>{
              item.splice(kk, 1, matrizPrincipal[kk][i-numRandom4-numRandom22*5]);
            })
          }
          else if(kk>18){
            //diagonal
            matrizPrincipal[kk].map((item,i)=>{
              arrayMayor[i].splice(i+numRandom4+numRandom22*5, 1, item);
            })
          }else{
            //horizontal
            matrizPrincipal[kk].map((item,i)=>{
              arrayMayor[kk].splice(i+numRandom4+numRandom22*5, 1, item);
            })
          }

        }else{
          if(kk<3){

            //vertical
            arrayMayor.map((item,i)=>{
              item.splice(kk, 1, matrizPrincipal[kk][i-numRandom4-numRandom22*5]);
            })
          }else if(kk>18){
            //diagonal
            matrizPrincipal[kk].map((item,i)=>{
              arrayMayor[i].splice(i+numRandom4+numRandom22*5, 1, item);
            })
          }else{
            //horizontal
            matrizPrincipal[kk].map((item,i)=>{
              arrayMayor[kk].splice(i+numRandom4+numRandom22*5, 1, item);
            })
          }
        }


      }
      console.log("final: ",arrayMayor)
      setArrayMostrar(arrayMayor)
    }
  }



  const sopa=arrayMostrar.map((item,i)=>
      <tr key={i}>
        {item.map((item2,j)=>
            <td key={j} >{item2==""||typeof(item2)=="undefined"?<p>{"-"/*letras[Math.floor(Math.random()*letras.length)]*/}</p>:<p style={{textTransform:"uppercase", color:"red"}}>{item2}</p>}</td>
        )}
      </tr>
    )

  return (
      <div className="contenedor">
        <Container fluid>
          <Row>
            <Col xs="12" md="8">
              <Table dark bordered>
                  <tbody>
                    {sopa}
                  </tbody>
                </Table>
            </Col>
            <Col xs="12" md="4">
              <Row>
                <Col>
                  <List>
                    <ul>
                      {lista}
                    </ul>
                  </List>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button onClick={handleRandom} size="lg">
                    Random
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>

    </div>
  );
}

export default VisualSopa;
