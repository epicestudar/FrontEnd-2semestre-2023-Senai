import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function MapaAtual() {
    // Utiliza o estado para armazenar a posição atual do usuário
    const [position, setPosition] = useState([0, 0]);
    useEffect(() => {
        // Configura um observador para monitorar as mudanças na posição do usuário
        const watchId = navigator.geolocation.watchPosition(
            // Atualiza a posição quando há uma mudança na localização
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude]);
            },
            // Lida com erros, se houver, ao obter a localização
            (error) => console.error(error),
            // Opções para a obtenção da localização
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
        // Limpa o observador quando o componente é desmontado
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []); // O segundo parâmetro vazio indica que este efeito deve ser executado apenas uma vez após a montagem inicial
    return (
        <div className="Mapa">
            {/* Renderiza o componente MapContainer da biblioteca react-leaflet */}
            <MapContainer center={position} zoom={2} style={{
                height: '60vh', width: '100%'
            }}>
                {/* Adiciona uma camada de azulejos (tiles) do OpenStreetMap ao mapa */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a
    
    href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Adiciona um marcador na posição atual do usuário */}
                <Marker position={position}>
                    {/* Adiciona um pop-up ao marcador */}
                    <Popup>Sua localização</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
export default MapaAtual;