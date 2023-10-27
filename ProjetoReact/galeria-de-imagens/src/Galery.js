// Importa o módulo React e a função useState do React
import React, { useState } from 'react';
import './Galery.css'; // Importa o arquivo CSS
import ImageCarousel from './ImageCarousel';
// Define o componente Gallery
const Gallery = () => {
    // Usa o hook useState para criar uma variável de estado chamada 'images'
    // Inicializa 'images' com um array contendo três URLs de imagem fictícias
    const [images, setImages] = useState([
    ]);
    // Define a função 'addImage' que será chamada quando o botão for clicado
    const addImage = () => {
        // Exibe um prompt para o usuário inserir a URL da imagem
        const imageUrl = prompt('Insira a URL da imagem:');
        // Verifica se o usuário inseriu uma URL (não nula)
        if (imageUrl) {

            // Atualiza o estado 'images' adicionando a nova URL ao array existente
            setImages([...images, imageUrl]);
        }
    };
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Pega o primeiro arquivo do input de arquivo
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Cria uma URL para a imagem carregada
            setImages([...images, imageUrl]); // Adiciona a nova imagem à galeria
        }
    };
    // Renderiza o conteúdo do componente Gallery
    return (
        <div class="main">
            <h1 class="title">Galeria de Imagens</h1>
            {/* Botão que chama a função 'addImage' quando clicado */}
            <button onClick={addImage}>Adicionar Imagem</button>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {/* Renderiza as imagens contidas no array 'images' */}
            <div className="image-container">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Imagem ${index}`} />
                ))}
            </div>

            <div>
                <ImageCarousel images={images}/>
            </div>
        </div>
    );
};
export default Gallery;