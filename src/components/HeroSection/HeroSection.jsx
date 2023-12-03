// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/images/banner-images/image1.webp"
import image2 from "../../assets/images/banner-images/banner4.jpg"
import image3 from "../../assets/images/banner-images/image3.webp"
// import image4 from "../../assets/images/banner-images/image4.png"
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    // <div>Hero</div>
    <section className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <h3>Best Men Outfits</h3>
            <p>Shop Now !</p>
            <button className="cta-button"> Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="First slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <h3>Electronics</h3>
            <p>Buy Now</p>
            <button className="cta-button btn btn-dark"><Link to="/products/electronics" >Explore Now</Link></button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="First slide"
            style={{ maxHeight: '400px', objectFit: 'cover' }}

          />
          <Carousel.Caption>
            <h3>Sport</h3>
            <p>purchase and play!</p>
            <button className="cta-button">Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
