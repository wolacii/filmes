import React, { useEffect, useState } from 'react'
import { Pagina } from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'
import apiFilmes from '../services/apiFilmes'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';


const index = (props) => {


  return (
    <>

      <Pagina titulo="Filmes Brabos">

        <Row md={4}>
          {props.filmes.map(item => (
            <Col>
              <Card>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p>Lançamento: {item.release_date}</p>
                  <p>Nota: {item.vote_average}</p>
                  <Link className='btn btn-danger' href={'filmes/' + item.id } >Detalhes...</Link>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/movie/popular')
  const filmes = resultado.data.results

  return {
    props: { filmes },
  }
}