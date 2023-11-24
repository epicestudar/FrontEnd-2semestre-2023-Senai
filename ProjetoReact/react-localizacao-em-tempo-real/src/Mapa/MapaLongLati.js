import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Componente funcional MapaAtual
const MapaLongitudeLatitude = () => {
// Estados para armazenar a latitude, longitude e marcadores no mapa
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');
const [markers, setMarkers] = useState([]);
// Função para adicionar uma nova marcação ao mapa
const handleAddMarker = () => {
// Verifica se foram fornecidos valores válidos para latitude e longitude
if (latitude && longitude) {
// Cria um novo marcador com uma posição baseada nos valores fornecidos
const newMarker = {
id: new Date().getTime(), // ID único baseado no timestamp
position: [parseFloat(latitude), parseFloat(longitude)],
};
// Atualiza o estado dos marcadores adicionando o novo marcador
setMarkers([...markers, newMarker]);
// Limpa os campos de entrada após adicionar a marcação
setLatitude('');
setLongitude('');
} else {

// Exibe um alerta se valores inválidos forem fornecidos
alert('Informe valores válidos para latitude e longitude.');
}
};
return (
<div className="App">
<div>
{/* Campo de entrada para a latitude */}
<label>Latitude:</label>
<input
type="text"
value={latitude}
onChange={(e) => setLatitude(e.target.value)}
/>
</div>
<div>
{/* Campo de entrada para a longitude */}
<label>Longitude:</label>
<input
type="text"
value={longitude}
onChange={(e) => setLongitude(e.target.value)}
/>
</div>
{/* Botão para adicionar uma marcação ao mapa */}
<button onClick={handleAddMarker}>Adicionar Marcação</button>
{/* Componente MapContainer para exibir o mapa */}
<MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
{/* Camada de azulejos (tiles) do OpenStreetMap */}
<TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
attribution='&copy; <a

href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
/>
{/* Mapeia os marcadores existentes para criar componentes Marker no mapa */}
{markers.map((marker) => (
<Marker key={marker.id} position={marker.position}>
{/* Popup exibindo o ID do marcador */}
<Popup>ID: {marker.id}</Popup>
</Marker>
))}
</MapContainer>
</div>
);
};
// Exporta o componente MapaAtual
export default MapaLongitudeLatitude;