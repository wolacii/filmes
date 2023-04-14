import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from "../components/Cabecalhos";
import Rodape from "../components/Rodape";
import { Container } from 'react-bootstrap';

export const Pagina = (props) => {


  return (
    <>
      <Cabecalho />
      <div className="bg-secondary text-white py-3 text-center mb-3">
        <h1>{props.titulo}</h1>
      </div>
      <Container>
        {props.children}
      </Container>

      <Rodape />
    </>
  )
}