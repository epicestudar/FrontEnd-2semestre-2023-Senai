import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const ImageCarousel = ({ images }) => {
    return (
        <div className="image-carousel">
            <Carousel showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Imagem ${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
export default ImageCarousel;