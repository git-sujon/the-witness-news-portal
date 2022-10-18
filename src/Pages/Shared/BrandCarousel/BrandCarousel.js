import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-60/main/src/assets/brands/Brand1.png"
                    alt="First slide"
                />
           
            </Carousel.Item>
           
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-client-module-60/main/src/assets/brands/Brand2.png"
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;