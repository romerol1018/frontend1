import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Nav from './components/nav'

import ListarMaquina from './components/Listarmaquina';
import CrearMaquina from './components/Crearmaquina';

function App() {
  return (
    <Router>
      <Nav/>
      <Route path='/'exact component={ListarMaquina}/>
      <Route path ='/crear' component={CrearMaquina}/>
      <Route path ='/editar/:id' component={CrearMaquina}/>
      
    </Router>
      
    
  );
}

export default App;
