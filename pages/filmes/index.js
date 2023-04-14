import React, { useEffect, useState } from 'react'
import { Pagina } from '../components/Pagina'
import apiDeputados from '../services/apiDeputados'
import apiFilmes from '../services/apiFilmes'

const index = (props) => {


  return (
    <>
    <Pagina titulo="Filmes Brabos">
        {props.filmes.map(item => (
            <p>{item.title}</p>
        ))}
    </Pagina>
    </>
  )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results
    console.log(resultado.data.results)

    return {
      props: {filmes}, // will be passed to the page component as props
    }
  }