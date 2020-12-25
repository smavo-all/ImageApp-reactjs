import React, { Fragment } from 'react';
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
  return (
    <Fragment>
      <Content>
        <Header title="Demo Image App - React 16.13.1 🚀"/>
        <Form />
        <ImageList />
      </Content>
    </Fragment>
  );
}

export default App;
