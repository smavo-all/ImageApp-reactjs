import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import ImageList from './Components/ImageList';
import styled from '@emotion/styled';

const Content = styled.div`
  max-width: 900px;
  display:grid;
  grid-template-columns: 1fr;
  grid-row-gap:10px;
  grid-column-gap:10px;
  margin: 0 auto;

`

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(5);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;

      const API_KEY = process.env.REACT_APP_API_KEY
      const API_URL = process.env.REACT_APP_API_URL;

      const imagenesPorPagina = 30;
      const url = `${API_URL}?key=${API_KEY}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
      console.log(resultado.hits);

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})

    }
    consultarApi();
  }, [busqueda, paginaactual]);

  // definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if(nuevaPaginaActual === 0 ) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  // definir la pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if(nuevaPaginaActual > totalpaginas ) return;

    guardarPaginaActual(nuevaPaginaActual);
  }


  return (
    <Fragment>
      <Content>
    <div className="container">
    <div className="jumbotron">
        <Header title="Image | App 🚀" />
        <Form setBusqueda={guardarBusqueda} />
        <ImageList imagenesList={imagenes} />
        { (paginaactual === 1) ? null : (
            <button 
                type="button"
                className="bbtn btn-info mr-1"
                onClick={paginaAnterior}
            >&laquo; Anterior </button>
          ) }
          { (paginaactual === totalpaginas) ? null : (
            <button 
              type="button"
              className="bbtn btn-info"
              onClick={paginaSiguiente}
            >Siguiente &raquo;</button>
          ) }
    </div>
    </div>
      </Content>
    </Fragment>
  );
}

export default App;
