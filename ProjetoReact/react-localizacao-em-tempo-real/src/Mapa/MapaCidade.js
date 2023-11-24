import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const MapaCidade = () => {
// Estado para armazenar o nome da cidade digitado pelo usuário
const [cityName, setCityName] = useState('');
// Estado para armazenar a posição da marcação no mapa
const [markerPosition, setMarkerPosition] = useState(null);
// Função chamada ao clicar no botão de pesquisa
const handleSearch = async () => {
// Verifica se o nome da cidade não está vazio
if (cityName.trim() !== '') {
try {
// Realiza uma requisição à API de Geocodificação do OpenStreetMap (Nominatim)
const response = await fetch(
`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(

cityName
)}`
);
// Verifica se a requisição foi bem-sucedida
if (!response.ok) {
throw new Error('Cidade não encontrada.');
}
// Converte a resposta da API para JSON
const data = await response.json();
// Verifica se a resposta da API contém resultados
if (data.length > 0) {
// Obtém as coordenadas da primeira cidade encontrada
const cityCoordinates = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
// Atualiza o estado da posição da marcação no mapa
setMarkerPosition(cityCoordinates);
} else {
// Se a cidade não foi encontrada, lança um erro
throw new Error('Cidade não encontrada.');
}
} catch (error) {
// Exibe um alerta com a mensagem de erro
alert(error.message);
}
}
};
return (
<div className="App">
<div>
{/* Campo de entrada para o nome da cidade */}
<label>Nome da Cidade:</label>
<input
type="text"
value={cityName}
onChange={(e) => setCityName(e.target.value)}
/>
{/* Botão para acionar a pesquisa da cidade */}
<button onClick={handleSearch}>Pesquisar</button>
</div>
{/* Componente do mapa usando react-leaflet */}
<MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
{/* Camada de bases (tiles) do OpenStreetMap */}
<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
attribution='&copy; <a

href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
{/* Se houver uma posição de marcação, exibe a marcação no mapa */}

{markerPosition && (
<Marker position={markerPosition}>
{/* Popup exibindo o nome da cidade */}
<Popup>Cidade: {cityName}</Popup>
</Marker>
)}
</MapContainer>
</div>
);
};
export default MapaCidade;