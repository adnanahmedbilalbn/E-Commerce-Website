// Home.js
import React from 'react';
import image1 from "../../assets/banner-images/image1.webp"
import image2 from "../../assets/banner-images/image2.webp"
import image3 from "../../assets/banner-images/image3.webp"
import image4 from "../../assets/banner-images/image4.png"
import HeroSection from '../../components/HeroSection/HeroSection';
import CategoriesSection from '../../components/CategoriesSection/Catogories';

const Home = () => {
  
  const SliderImages = [image1,image2,image3,image4];

  return (
    <div>

      <HeroSection />
      <CategoriesSection />

      {/* Features Section */}

      {/* About Us Section */}


    </div>
  );
};

export default Home;