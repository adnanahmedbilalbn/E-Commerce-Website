// Home.js
import React from 'react';
import image1 from "../assets/images/banner-images/image1.webp"
import image2 from "../assets/images/banner-images/image2.webp"
import image3 from "../assets/images/banner-images/image3.webp"
import image4 from "../assets/images/banner-images/image4.png"
import HeroSection from "../components/HeroSection/HeroSection"
import CategoriesSection from "../components/CategoriesSection/Categories"
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import ProductCard from '../components/Card/ProductCard';

const Home = () => {

  const product = {
    image: 'path/to/product-image.jpg',
    category: 'Electronics',
    title: 'Smartphone',
    price: 299.99,
    rating: 4,
  };
  const product2 = {
    image: 'path/to/product-image.jpg',
    category: 'Men',
    title: 'Shirt',
    price: 30.99,
    rating: 2,
  };
  
  const SliderImages = [image1,image2,image3,image4];
  const handleSearch = (searchTerm) => {
    // Implement your search logic here using the searchTerm
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <SearchBar placeholder="Search..." onSearch={handleSearch} />

      <HeroSection />
      <CategoriesSection />
      <div>
        <h3 className='text-center'>Our Products</h3>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
            <ProductCard product={product} />
            </div>
            <div className='col-6'>
               <ProductCard product={product2} />
            </div>

          </div>
        </div>
      </div>



      {/* Features Section */}

      {/* About Us Section */}


    </div>
  );
};

export default Home;
