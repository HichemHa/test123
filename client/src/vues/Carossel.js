import React from "react";
import { Carousel } from "react-bootstrap";

function Carossel() {
  return (
    <div style={{ marginTop: "1px", zIndex: "1" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100h-20"
            src="https://www.travauxavenue.com/assets/components/phpthumbof/cache/store%20int.5a3fe432a99c8f5666b5945a4b8d4575.jpg"
            alt="First slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100h-20 "
            src="https://www.maison-travaux.fr/wp-content/uploads/sites/8/2018/12/store-venitien-en-bois-stores-et-rideaux.com_.jpg"
            alt="Second slide"
            width="100%"
                        height="500px"

          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100h-20"
            src="https://maison3.advcdn.net/images/medias/000/039/000039831/660.jpg"
            alt="Third slide"
            width="100%"
                        height="500px"

          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carossel;
