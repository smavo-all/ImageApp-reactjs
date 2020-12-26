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

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === '') return;

      const API_KEY = process.env.REACT_APP_API_KEY
      const API_URL = process.env.REACT_APP_API_URL;
      const url = `${API_URL}?key=${API_KEY}&q=${busqueda}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
      console.log(resultado.hits)
    }
    consultarApi();
  }, [busqueda]);

  return (
    <Fragment>
      <Content>
        <Header title="Image | App 🚀" />
        <Form setBusqueda={guardarBusqueda} />
        <ImageList imagenesList={imagenes}/>
      </Content>
    </Fragment>
  );
}

export default App;
