// HeroSection.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/images/banner-images/image1.webp"
import image2 from "../../assets/images/banner-images/image2.webp"
import image3 from "../../assets/images/banner-images/image3.webp"
import image4 from "../../assets/images/banner-images/image4.png"
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
            <h3>Your Catchy Headline</h3>
            <p>Short and compelling subheadline or tagline that supports the headline.</p>
            <button className="cta-button">Explore Now</button>
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
            <h3>Your Catchy Headline</h3>
            <p>Short and compelling subheadline or tagline that supports the headline.</p>
            <button className="cta-button">Explore Now</button>
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
            <h3>Your Catchy Headline</h3>
            <p>Short and compelling subheadline or tagline that supports the headline.</p>
            <button className="cta-button">Explore Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSection;
