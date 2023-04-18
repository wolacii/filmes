import Pagina from '../components/Pagina'
import apiFilmes from '../services/apiFilmes'
import React from 'react'

const Detalhes = (props) => {



    return (
        <>
            <Pagina titulo={props.filme.title}>
                <div>Detalhes</div>
            </Pagina>
        </>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/movie/' + id)
    const filme = resultado.data
  

    return {
        props: {filme},
    }
}