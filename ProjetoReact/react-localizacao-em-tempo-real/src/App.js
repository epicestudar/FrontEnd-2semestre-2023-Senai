import './App.css';
import React from 'react';
import MapaAtual from './Mapa/MapaAtual';
import MapaLongitudeLatitude from './Mapa/MapaLongLati';
import MapaCidade from './Mapa/MapaCidade';

// Define o componente principal da aplicação, chamado 'App'.
function App() {
  return (<div className="App">
    <MapaCidade />
  </div>
  );
}
// Exporta o componente 'App' como o componente principal da aplicação.
export default App;