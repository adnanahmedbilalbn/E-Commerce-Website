// Home.js
import React from 'react';
import image1 from "../assets/images/banner-images/image1.webp"
import image2 from "../assets/images/banner-images/image2.webp"
import image3 from "../assets/images/banner-images/image3.webp"
import image4 from "../assets/images/banner-images/image4.png"
import HeroSection from "../components/HeroSection/HeroSection"
import CategoriesSection from "../components/CategoriesSection/Categories"
import SearchBar from '../components/SearchBar';
import createLinkedList from '../DSAFunctions/LinkedList'
import ProductSection from '../components/ProductSection/ProductSection';

const Home = () => {
  
  const myLinkedList = createLinkedList();
  myLinkedList.addToEnd('Item 1');
  myLinkedList.addToEnd('Item 2');
  myLinkedList.addToEnd('Item 3');
  myLinkedList.printList();
  myLinkedList.deleteItem('Item 2');
  myLinkedList.printList();
  
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
      <ProductSection />
      {/* Features Section */}

      {/* About Us Section */}
    </div>
  );
};

export default Home;
