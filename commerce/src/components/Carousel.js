import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComp = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="carousel"
            src="https://cdn.media.amplience.net/i/modanisa/mainkamp-960x350-TR-Z0-20220718?fmt=auto"
            alt="Discover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
