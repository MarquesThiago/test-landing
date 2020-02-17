import React from 'react';
import Header from './Layouts/header'
import Router from "../src/router"
import "./Style/app.css"


function App() {
  return (
    <>

    {/* cabeçalho da pagina */}
      <div className = "header_pagines">
        <Header></Header>
      </div>

      {/* conteudo da pagina  */}
      <div className = "container_router">
        <Router></Router>
      </div>
    </>
  );
}

export default App;
