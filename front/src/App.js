import React from 'react';
import Header from './Layouts/header'
import Router from "../src/router"
import "./Style/app.css"


function App() {
  return (
    <>
      <div className = "header_pagines">
        <Header></Header>
      </div>
      <div className = "container_router">
        <Router></Router>
      </div>
    </>
  );
}

export default App;
