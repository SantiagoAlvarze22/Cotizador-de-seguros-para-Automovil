import React from 'react';
import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width:600px;
  margin:0 auto;
`
const ContenedorFormulario = styled.div`
  background-color:#FFF;
  padding:3rem;
`

function App() {
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
      <ContenedorFormulario>

      </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
