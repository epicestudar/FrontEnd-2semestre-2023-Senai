// Arquivo de estilos CSS do componente App
import './App.css';
// Importa o módulo React para usar no código.
import React from 'react';
// Importa o componente Gallery que foi criado em 'Gallery.js'.
import Gallery from './Galery';
// Define o componente principal da aplicação, chamado 'App'.
function App() {
return (
<div className="App">
{/* 4. Renderiza o componente Gallery dentro do componente App */}
<Gallery />
</div>
);
}
// Exporta o componente 'App' como o componente principal da aplicação.
export default App;